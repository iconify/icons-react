import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nczsefc6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nczsefc6d"/>`,
		"fallback": "mdi:receipt-text-plus-outline",
	});
}

export default Component;
