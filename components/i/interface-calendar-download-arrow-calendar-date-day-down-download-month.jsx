import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/b/b1xsowbhu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><path class="b1xsowbhu"/></g>`,
		"fallback": "streamline:interface-calendar-download-arrow-calendar-date-day-down-download-month",
	});
}

export default Component;
