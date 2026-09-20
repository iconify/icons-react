import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0qvmi33m.css';
import '../../css/c/ctcoxd1qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0qvmi33m"/><path class="ctcoxd1qn"/></g>`,
		"fallback": "solar:notification-remove-outline",
	});
}

export default Component;
