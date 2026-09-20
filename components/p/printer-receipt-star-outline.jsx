import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdhpu3bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdhpu3bhh"/>`,
		"fallback": "mdi:printer-receipt-star-outline",
	});
}

export default Component;
