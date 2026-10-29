import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x-0s5eqvx.css';
import '../../css/c/cyozkjv1o.css';
import '../../css/u/uz2eer_lp.css';
import '../../css/e/e_umcfbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k x-0s5eqvx"/><path class="cyozkjv1o"/><path class="uz2eer_lp"/><path class="e_umcfbcd wm-s"/></g>`,
		"fallback": "withicons-bauhaus:satellite-dish",
	});
}

export default Component;
