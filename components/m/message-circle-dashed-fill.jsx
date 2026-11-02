import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf557bbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf557bbty"/>`,
		"fallback": "mingcute:message-circle-dashed-fill",
	});
}

export default Component;
