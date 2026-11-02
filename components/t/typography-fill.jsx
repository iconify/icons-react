import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jze89zb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jze89zb9e"/>`,
		"fallback": "mingcute:typography-fill",
	});
}

export default Component;
