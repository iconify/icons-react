import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew4z5r.css';
import '../../css/d/d-z279dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew4z5r"/>`,
		"fallback": "line-md:weather-cloudy-loop",
	});
}

export default Component;
