import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/a/azx2d2tww.css';
import '../../css/r/rc1p3-bmp.css';
import '../../css/s/sqsbcvb0j.css';
import '../../css/p/pby5glkbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG3rGhzeRd" cx="12" cy="12.65" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient><radialGradient id="SVGh6Mx2c7p" cx="12" cy="13.49" r="12.27" fx="9.06" fy="8.65" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient></defs><path fill="url(#SVG3rGhzeRd)" class="azx2d2tww wm-deco"/><path class="rc1p3-bmp wm-shadow"/><path fill="url(#SVGh6Mx2c7p)" class="sqsbcvb0j wm-k"/><path class="pby5glkbb wm-shine"/></g>`,
		"fallback": "withicons-halloween:refresh",
	});
}

export default Component;
