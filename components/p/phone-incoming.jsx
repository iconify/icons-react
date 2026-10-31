import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lxt23mbil.css';
import '../../css/i/i85m74r9t.css';
import '../../css/y/yayi2sbuv.css';
import '../../css/b/b5i545b3c.css';
import '../../css/i/iw_56_bhh.css';
import '../../css/x/xra01ccid.css';
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
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGd3nvjdvc" x1="9.99" x2="13.99" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lxt23mbil wm-k"/><path class="i85m74r9t wm-s"/><path class="wm-deco yayi2sbuv"/><path fill="url(#SVGd3nvjdvc)" class="b5i545b3c wm-k"/><path class="iw_56_bhh wm-s"/><path class="wm-shadow xra01ccid"/><path class="l7r_smbse wm-shine"/><path class="wm-shine yzov2sjfw"/></g>`,
		"fallback": "withicons-valentine:phone-incoming",
	});
}

export default Component;
