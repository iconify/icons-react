import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhrb43bwj.css';
import '../../css/a/aen-br9nh.css';
import '../../css/m/mal8l-ftc.css';
import '../../css/x/xc6kd3g1x.css';
import '../../css/d/ddy-j-b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhrb43bwj"/><path class="aen-br9nh"/><path class="mal8l-ftc"/><path class="xc6kd3g1x"/><path clip-rule="evenodd" class="ddy-j-b1c"/></g>`,
		"fallback": "solar:station-bold",
	});
}

export default Component;
