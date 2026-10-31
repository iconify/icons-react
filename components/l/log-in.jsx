import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/liwox_bth.css';
import '../../css/v/v_lms056i.css';
import '../../css/v/vphnfd9uu.css';
import '../../css/a/a3b_cdgth.css';
import '../../css/a/a4ksou2xl.css';
import '../../css/n/n_g6a_y0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="liwox_bth wm-shadow"/><path class="v_lms056i"/><path class="vphnfd9uu"/><path class="a3b_cdgth"/><path class="a4ksou2xl"/><path class="n_g6a_y0k"/></g>`,
		"fallback": "withicons-retro:log-in",
	});
}

export default Component;
