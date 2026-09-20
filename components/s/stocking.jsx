import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt4qh7j4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt4qh7j4x"/>`,
		"fallback": "mdi:stocking",
	});
}

export default Component;
