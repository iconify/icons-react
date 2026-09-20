import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/i/imgj1_bkm.css';
import '../../css/e/enezrp3rz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><path class="imgj1_bkm"/><path class="enezrp3rz"/></g>`,
		"fallback": "streamline:interface-calendar-home-calendar-date-day-home-house-month",
	});
}

export default Component;
