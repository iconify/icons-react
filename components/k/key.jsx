import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/a/azx2d2tww.css';
import '../../css/h/htqujdbbw.css';
import '../../css/g/ghjnyr2gh.css';
import '../../css/w/wuwitmdnr.css';
import '../../css/o/o6e0c0bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGPRxBjbxp" cx="12" cy="12.5" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient><radialGradient id="SVGDMUKYdXB" cx="12.18" cy="13.35" r="12.38" fx="9.18" fy="8.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient></defs><path fill="url(#SVGPRxBjbxp)" class="azx2d2tww wm-deco"/><path class="htqujdbbw wm-shadow"/><path fill="url(#SVGDMUKYdXB)" class="ghjnyr2gh wm-k"/><path class="wm-shine wuwitmdnr"/><path class="o6e0c0bkm wm-k"/></g>`,
		"fallback": "withicons-halloween:key",
	});
}

export default Component;
