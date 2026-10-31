import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/i1te2hb9o.css';
import '../../css/m/m2n98oqaa.css';
import '../../css/h/hmlz-9bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="i1te2hb9o wm-k"/><path class="m2n98oqaa wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="hmlz-9bnx wm-k"/></g>`,
		"fallback": "withicons-valentine:square-dashed",
	});
}

export default Component;
