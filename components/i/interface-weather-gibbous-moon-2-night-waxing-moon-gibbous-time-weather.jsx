import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khluvqi-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khluvqi-n"/>`,
		"fallback": "streamline:interface-weather-gibbous-moon-2-night-waxing-moon-gibbous-time-weather",
	});
}

export default Component;
