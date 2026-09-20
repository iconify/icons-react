import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap5g_-gyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap5g_-gyo"/>`,
		"fallback": "typcn:weather-windy",
	});
}

export default Component;
