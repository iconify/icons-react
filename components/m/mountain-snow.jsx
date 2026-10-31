import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/n0e16t30b.css';
import '../../css/u/uqf_ft_kq.css';
import '../../css/p/pm7y2xm6r.css';
import '../../css/s/sjqfot0dn.css';
import '../../css/b/bcq62pbvv.css';
import '../../css/e/ehctnnjkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGP7HIed4u" x1="9.99" x2="13.99" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="n0e16t30b wm-k"/><path class="uqf_ft_kq wm-deco"/><path fill="url(#SVGP7HIed4u)" class="pm7y2xm6r wm-k"/><path class="sjqfot0dn wm-shadow"/><path class="bcq62pbvv wm-shine"/><path class="ehctnnjkq wm-shine"/></g>`,
		"fallback": "withicons-valentine:mountain-snow",
	});
}

export default Component;
