import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2gg1trdk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/e/e_w5g2boj.css';
import '../../css/f/fegmimxbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w2gg1trdk"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="e_w5g2boj"/><path class="fegmimxbg"/></g>`,
		"fallback": "iconaut:panel-top-collapse-duo",
	});
}

export default Component;
