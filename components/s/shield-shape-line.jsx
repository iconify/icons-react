import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc6tizw8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc6tizw8s"/>`,
		"fallback": "mingcute:shield-shape-line",
	});
}

export default Component;
