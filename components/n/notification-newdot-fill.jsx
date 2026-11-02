import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v31pe2msq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v31pe2msq"/>`,
		"fallback": "mingcute:notification-newdot-fill",
	});
}

export default Component;
