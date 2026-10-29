import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqx77ybwi.css';
import '../../css/y/yd5k-hbzc.css';
import '../../css/h/hm1lzmgnv.css';
import '../../css/v/v2jkl0frg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oqx77ybwi"/><path class="wm-a yd5k-hbzc"/><path class="hm1lzmgnv wm-s"/><path class="v2jkl0frg"/></g>`,
		"fallback": "withicons:oven",
	});
}

export default Component;
