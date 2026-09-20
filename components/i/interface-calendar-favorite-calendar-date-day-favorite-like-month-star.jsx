import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/w/wvutsrmxj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><path class="wvutsrmxj"/></g>`,
		"fallback": "streamline:interface-calendar-favorite-calendar-date-day-favorite-like-month-star",
	});
}

export default Component;
