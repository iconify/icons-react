import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fom3czbvu.css';
import '../../css/w/wrnr6-bxj.css';
import '../../css/w/wff-ftbon.css';
import '../../css/c/c77m96byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGstTSuIZQ" x1="10.25" x2="14.25" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fom3czbvu wm-k"/><path class="wm-deco wrnr6-bxj"/><path fill="url(#SVGstTSuIZQ)" class="wff-ftbon wm-k"/><path class="c77m96byx wm-shadow"/></g>`,
		"fallback": "withicons-valentine:list-ordered",
	});
}

export default Component;
