import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmgs3-w5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmgs3-w5o"/>`,
		"fallback": "heroicons-outline:receipt-refund",
	});
}

export default Component;
