import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzqiss7xx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzqiss7xx"/>`,
		"fallback": "streamline:interface-weather-temperature-cold-temperature-thermometer-minus-mercury-cold-weather",
	});
}

export default Component;
