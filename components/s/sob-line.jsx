import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf8oqgb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf8oqgb6u"/>`,
		"fallback": "mingcute:sob-line",
	});
}

export default Component;
