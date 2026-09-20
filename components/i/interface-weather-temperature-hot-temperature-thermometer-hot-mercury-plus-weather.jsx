import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_kyjebew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_kyjebew"/>`,
		"fallback": "streamline:interface-weather-temperature-hot-temperature-thermometer-hot-mercury-plus-weather",
	});
}

export default Component;
