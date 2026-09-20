import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbc358yre.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbc358yre"/>`,
		"fallback": "streamline:interface-calendar-disable-calendar-date-day-delete-disable-month-remove",
	});
}

export default Component;
