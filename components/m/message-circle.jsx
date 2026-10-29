import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/f/flj-18bqm.css';
import '../../css/p/pbalkd-mx.css';
import '../../css/a/acn28ovnu.css';
import '../../css/u/uimhwfbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGVXjeRbnV" cx="12.08" cy="13.48" r="13.23" fx="8.94" fy="8.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGb5bnfd8b" cx="12.08" cy="12.88" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGb5bnfd8b)" class="azx2d2tww wm-deco"/><path class="flj-18bqm wm-shadow"/><path fill="url(#SVGVXjeRbnV)" class="pbalkd-mx wm-k"/><path class="acn28ovnu wm-k"/><path class="uimhwfbzk wm-shine"/></g>`,
		"fallback": "withicons-halloween:message-circle",
	});
}

export default Component;
