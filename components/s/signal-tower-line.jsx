import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkdap9pwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkdap9pwa"/>`,
		"fallback": "ri:signal-tower-line",
	});
}

export default Component;
