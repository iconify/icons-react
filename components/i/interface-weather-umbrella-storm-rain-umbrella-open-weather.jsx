import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en56epedd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en56epedd"/>`,
		"fallback": "streamline:interface-weather-umbrella-storm-rain-umbrella-open-weather",
	});
}

export default Component;
