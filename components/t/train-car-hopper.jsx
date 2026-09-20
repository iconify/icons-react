import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im7t84bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im7t84bbc"/>`,
		"fallback": "mdi:train-car-hopper",
	});
}

export default Component;
