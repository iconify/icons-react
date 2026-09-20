import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dze2-e2jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dze2-e2jz"/>`,
		"fallback": "majesticons:ticket-text-line",
	});
}

export default Component;
