import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pno3q_b-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pno3q_b-u"/>`,
		"fallback": "streamline-pixel:interface-essential-notification-alert",
	});
}

export default Component;
