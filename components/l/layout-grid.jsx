import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svsyk2bqe.css';
import '../../css/d/dhau0jb_j.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/z/zviyor5ti.css';
import '../../css/q/q_tz2llju.css';
import '../../css/b/b7orypbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyGNuUqUn" cx="12" cy="13.44" r="11.88" fx="9.12" fy="8.76" gradientUnits="userSpaceOnUse"><stop offset="0" class="svsyk2bqe"/><stop offset=".45" class="svsyk2bqe"/><stop offset="1" class="dhau0jb_j"/></radialGradient><radialGradient id="SVGWf4Pzish" cx="12" cy="12.9" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGWf4Pzish)" class="azx2d2tww wm-deco"/><path class="wm-shadow zviyor5ti"/><path fill="url(#SVGyGNuUqUn)" class="q_tz2llju wm-k"/><path class="b7orypbdi wm-shine"/></g>`,
		"fallback": "withicons-halloween:layout-grid",
	});
}

export default Component;
