import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe8s97qji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe8s97qji"/>`,
		"fallback": "mdi:u-turn-right-bold",
	});
}

export default Component;
