import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/svq8e2xkz.css';
import '../../css/o/oii71xl7v.css';
import '../../css/s/s4636i18u.css';
import '../../css/h/h4se2oa_i.css';
import '../../css/g/g71_lccyw.css';
import '../../css/n/n-637rbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmKU4Zd2h" x1="10" x2="14" y1="1.01" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="svq8e2xkz wm-k"/><path class="oii71xl7v wm-deco"/><path fill="url(#SVGmKU4Zd2h)" class="s4636i18u wm-k"/><path class="h4se2oa_i wm-shadow"/><path class="g71_lccyw wm-shine"/><path class="n-637rbrg wm-shine"/></g>`,
		"fallback": "withicons-valentine:martini",
	});
}

export default Component;
