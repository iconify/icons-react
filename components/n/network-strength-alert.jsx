import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p87fr4bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p87fr4bhx"/>`,
		"fallback": "mdi:network-strength-alert",
	});
}

export default Component;
