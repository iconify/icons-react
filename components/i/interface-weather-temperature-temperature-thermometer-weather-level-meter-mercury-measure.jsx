import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1ileh14j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1ileh14j"/>`,
		"fallback": "streamline:interface-weather-temperature-temperature-thermometer-weather-level-meter-mercury-measure",
	});
}

export default Component;
