import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me8m6obcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me8m6obcz"/>`,
		"fallback": "mingcute:pause-circle-fill",
	});
}

export default Component;
