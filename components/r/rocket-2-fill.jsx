import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msrr5lb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msrr5lb8q"/>`,
		"fallback": "mingcute:rocket-2-fill",
	});
}

export default Component;
