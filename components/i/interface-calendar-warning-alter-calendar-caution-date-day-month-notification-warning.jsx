import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fli6jtx8e.css';
import '../../css/s/sv39nxb-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fli6jtx8e"/><circle class="sv39nxb-k"/></g>`,
		"fallback": "streamline:interface-calendar-warning-alter-calendar-caution-date-day-month-notification-warning",
	});
}

export default Component;
