import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ces77_bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ces77_bvp"/>`,
		"fallback": "mingcute:message-square-quote-fill",
	});
}

export default Component;
