import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv9d3tbjp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv9d3tbjp"/>`,
		"fallback": "streamline:interface-weather-gibbous-moon-1-night-moon-weather-gibbous-time-waning",
	});
}

export default Component;
