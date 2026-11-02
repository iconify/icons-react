import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32j6t-3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32j6t-3w"/>`,
		"fallback": "mingcute:time-duration-fill",
	});
}

export default Component;
