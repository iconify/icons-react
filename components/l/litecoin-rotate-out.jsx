import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ypvy0yenq.css';
import '../../css/n/nd0nr62we.css';
import '../../css/r/ry1_b0b_x.css';
import '../../css/f/f5eutvbbl.css';
import '../../css/l/l1wdx4b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ypvy0yenq"/><path class="nd0nr62we"/><path class="ry1_b0b_x"/><path class="f5eutvbbl"/><path class="l1wdx4b2s"/></g>`,
		"fallback": "iconoir:litecoin-rotate-out",
	});
}

export default Component;
