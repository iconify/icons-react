import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7aex9hdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7aex9hdm"/>`,
		"fallback": "thesvg:showtime",
	});
}

export default Component;
