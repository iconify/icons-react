import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qndgavjbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qndgavjbd"/>`,
		"fallback": "mdi:receipt-text-pending",
	});
}

export default Component;
