import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqlim6brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqlim6brh"/>`,
		"fallback": "mdi:receipt-outline",
	});
}

export default Component;
