import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwcwarblc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwcwarblc"/>`,
		"fallback": "streamline:travel-airport-arrival-time-plane-airplane-trip-land-travel-time-adventure-timer-clock",
	});
}

export default Component;
