import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg30chbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg30chbuw"/>`,
		"fallback": "mingcute:send-plane-fill",
	});
}

export default Component;
