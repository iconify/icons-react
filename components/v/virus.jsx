import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/o/oij2z1aov.css';
import '../../css/q/q4o1b-p4r.css';
import '../../css/d/df_5b7tlq.css';
import '../../css/n/nqn8nobkk.css';
import '../../css/k/kyq3ldbsj.css';
import '../../css/v/vcvfjabzw.css';
import '../../css/b/bso-d5lzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkr7NFb3E" x1="10" x2="14" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="oij2z1aov wm-k"/><path class="q4o1b-p4r wm-deco"/><path class="df_5b7tlq wm-k"/><path fill="url(#SVGkr7NFb3E)" class="nqn8nobkk wm-k"/><path class="kyq3ldbsj wm-shadow"/><path class="vcvfjabzw wm-shine"/><path class="bso-d5lzz wm-shine"/></g>`,
		"fallback": "withicons-valentine:virus",
	});
}

export default Component;
