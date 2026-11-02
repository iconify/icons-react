import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4b9ac1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4b9ac1q"/>`,
		"fallback": "mingcute:message-square-plus-line",
	});
}

export default Component;
