import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrumi43vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrumi43vy"/>`,
		"fallback": "mdi:network-strength-2-warning",
	});
}

export default Component;
