import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns6fbwp0a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns6fbwp0a"/>`,
		"fallback": "streamline:interface-weather-sun-1-cloud-meteorology-cloudy-partly-sunny-weather",
	});
}

export default Component;
