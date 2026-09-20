import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt2orlbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt2orlbgf"/>`,
		"fallback": "mingcute:rewind-forward-square-10-fill",
	});
}

export default Component;
