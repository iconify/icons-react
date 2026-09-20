import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niw28abdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niw28abdk"/>`,
		"fallback": "mingcute:wave-fill",
	});
}

export default Component;
