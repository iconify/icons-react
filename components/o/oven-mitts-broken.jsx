import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fxj5px5bx.css';
import '../../css/t/tgti9xtjw.css';
import '../../css/c/cakjw1b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fxj5px5bx"/><path class="tgti9xtjw"/><path class="cakjw1b4i"/></g>`,
		"fallback": "solar:oven-mitts-broken",
	});
}

export default Component;
