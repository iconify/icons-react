import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lenh45b2v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lenh45b2v"/>`,
		"fallback": "streamline:interface-weather-cloud-1-cloud-meteorology-cloudy-overcast-cover-weather",
	});
}

export default Component;
