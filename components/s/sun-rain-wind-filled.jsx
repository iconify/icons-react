import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2b-_r9kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2b-_r9kn"/>`,
		"fallback": "boxicons:sun-rain-wind-filled",
	});
}

export default Component;
