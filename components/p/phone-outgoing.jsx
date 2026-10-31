import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lxt23mbil.css';
import '../../css/e/epeo7yb3j.css';
import '../../css/m/mh9vl35or.css';
import '../../css/b/b5i545b3c.css';
import '../../css/o/o7_4aob-k.css';
import '../../css/w/w2aa2etev.css';
import '../../css/l/l7r_smbse.css';
import '../../css/y/yzov2sjfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGd3nvjdvc" x1="9.99" x2="13.99" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lxt23mbil wm-k"/><path class="epeo7yb3j wm-s"/><path class="mh9vl35or wm-deco"/><path fill="url(#SVGd3nvjdvc)" class="b5i545b3c wm-k"/><path class="o7_4aob-k wm-s"/><path class="w2aa2etev wm-shadow"/><path class="l7r_smbse wm-shine"/><path class="wm-shine yzov2sjfw"/></g>`,
		"fallback": "withicons-valentine:phone-outgoing",
	});
}

export default Component;
