import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdyz09b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdyz09b-w"/>`,
		"fallback": "mingcute:quarter-circle-dash-fill",
	});
}

export default Component;
