import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmag5z49h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmag5z49h"/>`,
		"fallback": "mdi:receipt-text-send-outline",
	});
}

export default Component;
