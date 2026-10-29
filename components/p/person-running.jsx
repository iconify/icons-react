import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/u/urdsoyirw.css';
import '../../css/k/klalqjb5s.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/b/bslbjwmws.css';
import '../../css/v/v30l1mihz.css';
import '../../css/t/ti0_goxjn.css';
import '../../css/h/hvyzejb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGlVTJxd8M" cx="11.25" cy="13.4" r="13.52" fx="8.61" fy="8.07" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGDNi9gb2F" cx="11.25" cy="13.81" r="12.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGeJA3tdyA" cx="11.25" cy="12.78" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGeJA3tdyA)" class="azx2d2tww wm-deco"/><path class="bslbjwmws wm-shadow"/><path fill="url(#SVGDNi9gb2F)" class="v30l1mihz wm-shine"/><path fill="url(#SVGlVTJxd8M)" class="ti0_goxjn wm-k"/><path class="hvyzejb1x wm-shine"/></g>`,
		"fallback": "withicons-halloween:person-running",
	});
}

export default Component;
