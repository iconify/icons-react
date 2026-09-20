import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5gm0tbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5gm0tbno"/>`,
		"fallback": "mdi:receipt-clock-outline",
	});
}

export default Component;
