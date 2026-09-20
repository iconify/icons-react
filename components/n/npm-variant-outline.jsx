import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlze138cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlze138cm"/>`,
		"fallback": "mdi:npm-variant-outline",
	});
}

export default Component;
