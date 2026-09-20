import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3q9g5bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3q9g5bfg"/>`,
		"fallback": "mingcute:notification-newdot-line",
	});
}

export default Component;
