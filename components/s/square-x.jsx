import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/p33u69bps.css';
import '../../css/t/tpkh_j2kt.css';
import '../../css/o/o5wirsxuo.css';
import '../../css/q/qgy1u6uxa.css';
import '../../css/b/b2g4bdp0f.css';
import '../../css/x/x_g3z-lro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="p33u69bps wm-k"/><path class="tpkh_j2kt wm-k"/><path fill="url(#SVGWIPAFndQ)" class="o5wirsxuo wm-k"/><path class="qgy1u6uxa wm-shadow"/><path class="b2g4bdp0f wm-shine"/><path class="wm-shine x_g3z-lro"/></g>`,
		"fallback": "withicons-valentine:square-x",
	});
}

export default Component;
