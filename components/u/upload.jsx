import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/q/q0jsyqk3o.css';
import '../../css/d/dmzh5mhrd.css';
import '../../css/u/u9-kqhbhy.css';
import '../../css/y/yuj99zi-m.css';
import '../../css/l/l1g-fxbhl.css';
import '../../css/w/wqeel5buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="q0jsyqk3o wm-k"/><path class="dmzh5mhrd wm-a"/><path class="u9-kqhbhy wm-deco"/><path fill="url(#SVGNQi7UdpF)" class="wm-k yuj99zi-m"/><path class="l1g-fxbhl wm-a"/><path class="wm-shadow wqeel5buh"/></g>`,
		"fallback": "withicons-valentine:upload",
	});
}

export default Component;
