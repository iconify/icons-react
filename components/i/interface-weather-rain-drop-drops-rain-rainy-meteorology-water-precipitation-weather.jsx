import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eclize6ak.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eclize6ak"/>`,
		"fallback": "streamline:interface-weather-rain-drop-drops-rain-rainy-meteorology-water-precipitation-weather",
	});
}

export default Component;
