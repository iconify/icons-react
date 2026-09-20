import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds5-kubap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds5-kubap"/>`,
		"fallback": "streamline:interface-weather-windmill-windmill-velocity-weather-wind",
	});
}

export default Component;
