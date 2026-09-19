import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axh3712_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG0zXSObqM)"><path class="axh3712_l"/></g><defs><clipPath id="SVG0zXSObqM"/></defs></g>`,
		"fallback": "flowbite:pizza-slice-outline",
	});
}

export default Component;
