import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2zc8cbxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2zc8cbxt"/>`,
		"fallback": "selfhst:the-weather-channel-light",
	});
}

export default Component;
