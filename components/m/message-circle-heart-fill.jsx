import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqkc3tacr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqkc3tacr"/>`,
		"fallback": "mingcute:message-circle-heart-fill",
	});
}

export default Component;
