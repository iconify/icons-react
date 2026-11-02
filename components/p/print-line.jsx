import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_x0k4bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_x0k4bdq"/>`,
		"fallback": "mingcute:print-line",
	});
}

export default Component;
