import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz8mns16v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz8mns16v"/>`,
		"fallback": "mingcute:steering-wheel-line",
	});
}

export default Component;
