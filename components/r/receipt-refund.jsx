import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytj0k685m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytj0k685m"/>`,
		"fallback": "heroicons:receipt-refund",
	});
}

export default Component;
