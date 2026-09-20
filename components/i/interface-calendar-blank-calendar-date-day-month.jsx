import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29tk6bqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29tk6bqu"/>`,
		"fallback": "streamline:interface-calendar-blank-calendar-date-day-month",
	});
}

export default Component;
