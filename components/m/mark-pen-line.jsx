import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st1ystbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st1ystbbw"/>`,
		"fallback": "mingcute:mark-pen-line",
	});
}

export default Component;
