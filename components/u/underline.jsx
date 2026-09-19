import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5w-e9bwx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5w-e9bwx"/>`,
		"fallback": "f7:underline",
	});
}

export default Component;
