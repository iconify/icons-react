import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2sefubek.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2sefubek"/>`,
		"fallback": "f7:lock",
	});
}

export default Component;
