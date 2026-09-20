import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vym98jbvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vym98jbvj"/>`,
		"fallback": "streamline:interface-weather-first-quarter-moon-night-moon-first-half-quarter-time-weather",
	});
}

export default Component;
