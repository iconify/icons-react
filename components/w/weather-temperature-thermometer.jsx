import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an8xsuxoe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an8xsuxoe"/>`,
		"fallback": "streamline-pixel:weather-temperature-thermometer",
	});
}

export default Component;
