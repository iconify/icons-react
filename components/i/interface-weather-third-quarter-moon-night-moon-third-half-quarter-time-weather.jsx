import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ody3_jmli.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ody3_jmli"/>`,
		"fallback": "streamline:interface-weather-third-quarter-moon-night-moon-third-half-quarter-time-weather",
	});
}

export default Component;
