import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uin8x9ouj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uin8x9ouj"/>`,
		"fallback": "mingcute:laugh-line",
	});
}

export default Component;
