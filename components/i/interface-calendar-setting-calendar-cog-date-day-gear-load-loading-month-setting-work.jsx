import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/db8x5vb9v.css';
import '../../css/f/fq0ry90aj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="db8x5vb9v"/><circle class="fq0ry90aj"/></g>`,
		"fallback": "streamline:interface-calendar-setting-calendar-cog-date-day-gear-load-loading-month-setting-work",
	});
}

export default Component;
