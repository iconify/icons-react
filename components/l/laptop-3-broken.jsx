import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yj_gp5bus.css';
import '../../css/v/vd6xhkbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yj_gp5bus"/><path class="vd6xhkbkr"/></g>`,
		"fallback": "solar:laptop-3-broken",
	});
}

export default Component;
