import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/i1km83bzh.css';
import '../../css/z/zgjtgcbbf.css';
import '../../css/y/y4of48b1g.css';
import '../../css/c/cww0iubzi.css';
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
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="i1km83bzh wm-k"/><path class="wm-k zgjtgcbbf"/><path fill="url(#SVGWIPAFndQ)" class="wm-k y4of48b1g"/><path class="cww0iubzi wm-shadow"/><path class="b2g4bdp0f wm-shine"/><path class="wm-shine x_g3z-lro"/></g>`,
		"fallback": "withicons-valentine:vault",
	});
}

export default Component;
