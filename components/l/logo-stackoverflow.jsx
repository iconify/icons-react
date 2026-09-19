import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f948t8o3a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f948t8o3a"/>`,
		"fallback": "f7:logo-stackoverflow",
	});
}

export default Component;
