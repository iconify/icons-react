import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gjjbgxjba.css';
import '../../css/u/u629kubmn.css';
import '../../css/z/z3d_d9bhh.css';
import '../../css/i/i8m0vsq3r.css';
import '../../css/j/j06d1ab8e.css';
import '../../css/w/wk4-ckbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gjjbgxjba wm-shadow"/><path class="u629kubmn"/><path class="z3d_d9bhh"/><path class="i8m0vsq3r"/><path class="j06d1ab8e"/><path class="wk4-ckbvc"/></g>`,
		"fallback": "withicons-retro:palette",
	});
}

export default Component;
