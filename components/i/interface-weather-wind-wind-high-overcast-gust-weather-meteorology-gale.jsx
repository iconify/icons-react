import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejcxksb9o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejcxksb9o"/>`,
		"fallback": "streamline:interface-weather-wind-wind-high-overcast-gust-weather-meteorology-gale",
	});
}

export default Component;
