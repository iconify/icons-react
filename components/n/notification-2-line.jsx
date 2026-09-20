import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx1s9bc_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx1s9bc_w"/>`,
		"fallback": "ri:notification-2-line",
	});
}

export default Component;
