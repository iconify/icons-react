import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7hl_1dzk.css';
import '../../css/k/k02fzkb_b.css';
import '../../css/w/wjxdsob9d.css';
import '../../css/n/n255akb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f7hl_1dzk"/><path class="k02fzkb_b wm-a"/><path class="wjxdsob9d wm-a"/><path class="n255akb9d"/></g>`,
		"fallback": "withicons:truck-duo",
	});
}

export default Component;
