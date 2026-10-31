import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/swq1cac2b.css';
import '../../css/n/nlrvbri-s.css';
import '../../css/a/a18dgsisi.css';
import '../../css/u/u_9z9rbvs.css';
import '../../css/b/bdc65ubcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="swq1cac2b wm-shadow"/><path class="nlrvbri-s"/><path class="a18dgsisi"/><path class="u_9z9rbvs"/><path class="bdc65ubcx"/></g>`,
		"fallback": "withicons-retro:timer-reset",
	});
}

export default Component;
