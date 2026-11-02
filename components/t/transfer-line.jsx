import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h55hvi3xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h55hvi3xk"/>`,
		"fallback": "mingcute:transfer-line",
	});
}

export default Component;
