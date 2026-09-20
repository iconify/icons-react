import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt-chjbfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt-chjbfo"/>`,
		"fallback": "streamline:interface-weather-cresent-moon-2-night-new-moon-crescent-waxing-time-weather",
	});
}

export default Component;
