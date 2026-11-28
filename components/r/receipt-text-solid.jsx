import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nop6pnbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nop6pnbaq"/>`,
		"fallback": "iconaut:receipt-text-solid",
	});
}

export default Component;
