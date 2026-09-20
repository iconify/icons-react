import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgrhv-byx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgrhv-byx"/>`,
		"fallback": "streamline:travel-airport-departure-time-travel-plane-trip-airplane-time-off-adventure-timer-take-clock",
	});
}

export default Component;
