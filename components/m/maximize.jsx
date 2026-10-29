import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/n/n_n2p60oc.css';
import '../../css/f/f-3s7ipce.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/j/jo54opcdx.css';
import '../../css/a/a_bxbzb4t.css';
import '../../css/p/p3slmbblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG2zMxEzoC" cx="12" cy="13.4" r="12.4" fx="9" fy="8.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGgV67MchO" cx="12" cy="12.5" r="10.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="n_n2p60oc"/><stop offset=".55" class="f-3s7ipce"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGgV67MchO)" class="azx2d2tww wm-deco"/><path class="jo54opcdx wm-shadow"/><path fill="url(#SVG2zMxEzoC)" class="a_bxbzb4t wm-k"/><path class="p3slmbblz wm-shine"/></g>`,
		"fallback": "withicons-halloween:maximize",
	});
}

export default Component;
