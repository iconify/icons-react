import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxk6t6c5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxk6t6c5q"/>`,
		"fallback": "mdi:weather-moonset-up",
	});
}

export default Component;
