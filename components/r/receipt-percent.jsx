import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0661zwvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0661zwvi"/>`,
		"fallback": "heroicons-outline:receipt-percent",
	});
}

export default Component;
