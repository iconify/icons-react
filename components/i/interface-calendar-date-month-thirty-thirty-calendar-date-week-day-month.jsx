import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ipb9__dlq.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/a/adr7gbcwe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ipb9__dlq"/><path class="gq5mk-mss"/><path class="adr7gbcwe"/></g>`,
		"fallback": "streamline:interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month",
	});
}

export default Component;
