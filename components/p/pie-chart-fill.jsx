import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-07iacxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-07iacxe"/>`,
		"fallback": "ri:pie-chart-fill",
	});
}

export default Component;
