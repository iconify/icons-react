import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/ygx4r9bwx.css';
import '../../css/u/u18ic1blm.css';
import '../../css/k/k-jpa3b8f.css';
import '../../css/r/rc7mc2fdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbTmbldZt" x1="9.75" x2="13.75" y1="6" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k ygx4r9bwx"/><path class="u18ic1blm wm-deco"/><path fill="url(#SVGbTmbldZt)" class="k-jpa3b8f wm-k"/><path class="rc7mc2fdj wm-shadow"/></g>`,
		"fallback": "withicons-valentine:trending-up",
	});
}

export default Component;
