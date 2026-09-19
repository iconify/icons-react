import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkb519bym.css';
import '../../css/r/rw9hx_i8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vkb519bym"/><path class="rw9hx_i8j"/></g>`,
		"fallback": "iconoir:open-book",
	});
}

export default Component;
