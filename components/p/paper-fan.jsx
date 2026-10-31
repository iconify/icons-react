import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c-vizm30f.css';
import '../../css/x/xnks8x_xd.css';
import '../../css/d/d978k9b_i.css';
import '../../css/i/iv8qp3bgj.css';
import '../../css/f/fzi65j4bn.css';
import '../../css/r/ri-lrbcui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c-vizm30f wm-shadow"/><path class="xnks8x_xd"/><path class="d978k9b_i"/><path class="iv8qp3bgj wm-s"/><path class="fzi65j4bn wm-s"/><path class="ri-lrbcui"/></g>`,
		"fallback": "withicons-retro:paper-fan",
	});
}

export default Component;
