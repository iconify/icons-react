import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb4-j_brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb4-j_brm"/>`,
		"fallback": "ri:sun-line",
	});
}

export default Component;
