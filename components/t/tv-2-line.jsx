import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi2d1hbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi2d1hbvy"/>`,
		"fallback": "mingcute:tv-2-line",
	});
}

export default Component;
