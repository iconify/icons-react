import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/whspc0b_i.css';
import '../../css/f/f67y05bux.css';
import '../../css/n/n7itbbc5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="whspc0b_i"/><path class="f67y05bux"/><path class="n7itbbc5y"/></g>`,
		"fallback": "solar:kanban-linear",
	});
}

export default Component;
