import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2rd5by9y.css';
import '../../css/k/kntrzcclo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2rd5by9y"/><path class="kntrzcclo"/>`,
		"fallback": "selfhst:the-weather-channel",
	});
}

export default Component;
