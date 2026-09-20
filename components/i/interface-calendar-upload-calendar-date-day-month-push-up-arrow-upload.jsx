import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/v/vnj3r_bid.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><path class="vnj3r_bid"/></g>`,
		"fallback": "streamline:interface-calendar-upload-calendar-date-day-month-push-up-arrow-upload",
	});
}

export default Component;
