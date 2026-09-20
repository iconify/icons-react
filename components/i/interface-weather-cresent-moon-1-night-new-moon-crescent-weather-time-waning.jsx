import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-6ugubog.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-6ugubog"/>`,
		"fallback": "streamline:interface-weather-cresent-moon-1-night-new-moon-crescent-weather-time-waning",
	});
}

export default Component;
