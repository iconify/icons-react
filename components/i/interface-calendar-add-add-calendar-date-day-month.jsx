import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucwmz4b2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucwmz4b2w"/>`,
		"fallback": "streamline:interface-calendar-add-add-calendar-date-day-month",
	});
}

export default Component;
