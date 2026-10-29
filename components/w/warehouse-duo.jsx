import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/et8dm98nh.css';
import '../../css/g/g3_i1_bjs.css';
import '../../css/w/wmk_i8bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="et8dm98nh"/><path class="g3_i1_bjs wm-a"/><path class="wmk_i8bat"/></g>`,
		"fallback": "withicons:warehouse-duo",
	});
}

export default Component;
