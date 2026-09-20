import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aux66vpig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aux66vpig"/>`,
		"fallback": "mdi:store-hours-outline",
	});
}

export default Component;
