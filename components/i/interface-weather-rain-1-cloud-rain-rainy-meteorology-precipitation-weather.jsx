import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm9um7bxg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm9um7bxg"/>`,
		"fallback": "streamline:interface-weather-rain-1-cloud-rain-rainy-meteorology-precipitation-weather",
	});
}

export default Component;
