import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biuqp6b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biuqp6b5d"/>`,
		"fallback": "mingcute:notification-off-fill",
	});
}

export default Component;
