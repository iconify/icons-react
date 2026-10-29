import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jt065lb1t.css';
import '../../css/k/kz9qlpk6s.css';
import '../../css/q/qit5teboe.css';
import '../../css/s/sfp-qh-hh.css';
import '../../css/x/x74picb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jt065lb1t wm-k"/><path class="kz9qlpk6s wm-s"/><path class="qit5teboe wm-shadow"/><path class="sfp-qh-hh wm-k"/><path class="wm-s x74picb7l"/></g>`,
		"fallback": "withicons:moon-star-engrave",
	});
}

export default Component;
