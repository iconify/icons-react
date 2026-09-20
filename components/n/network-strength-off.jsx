import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el95osbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el95osbpi"/>`,
		"fallback": "mdi:network-strength-off",
	});
}

export default Component;
