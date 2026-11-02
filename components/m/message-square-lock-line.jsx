import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kku6257la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kku6257la"/>`,
		"fallback": "mingcute:message-square-lock-line",
	});
}

export default Component;
