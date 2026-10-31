import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klugf78fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klugf78fa"/>`,
		"fallback": "coolicons:paint-bucket-fill-round",
	});
}

export default Component;
