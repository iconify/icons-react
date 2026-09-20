import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0tuhogfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i0tuhogfj"/>`,
		"fallback": "streamline:interface-weather-full-moon-night-full-moon-time-weather",
	});
}

export default Component;
