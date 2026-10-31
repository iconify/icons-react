import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rd-i8vjjs.css';
import '../../css/a/aldmwyg8i.css';
import '../../css/g/g4zvhccwy.css';
import '../../css/d/ds8eobuhg.css';
import '../../css/r/rkfhtjbpq.css';
import '../../css/x/x_g3z-lro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rd-i8vjjs wm-k"/><path class="aldmwyg8i wm-k"/><path fill="url(#SVGWIPAFndQ)" class="g4zvhccwy wm-k"/><path class="ds8eobuhg wm-shadow"/><path class="rkfhtjbpq wm-shine"/><path class="wm-shine x_g3z-lro"/></g>`,
		"fallback": "withicons-valentine:parking",
	});
}

export default Component;
