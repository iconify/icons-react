import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uip1_obsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uip1_obsl"/>`,
		"fallback": "mingcute:lemon-squeezy-line",
	});
}

export default Component;
