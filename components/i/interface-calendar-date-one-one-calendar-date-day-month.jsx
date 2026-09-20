import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l9chy_bbc.css';
import '../../css/g/gq5mk-mss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l9chy_bbc"/><path class="gq5mk-mss"/></g>`,
		"fallback": "streamline:interface-calendar-date-one-one-calendar-date-day-month",
	});
}

export default Component;
