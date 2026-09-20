import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iohu4wb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iohu4wb8t"/>`,
		"fallback": "mdi:receipt-text-edit",
	});
}

export default Component;
