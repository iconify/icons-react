import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6t6pbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln6t6pbsd"/>`,
		"fallback": "mdi:payment-on-delivery",
	});
}

export default Component;
