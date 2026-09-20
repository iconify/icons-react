import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp4d-sb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp4d-sb3o"/>`,
		"fallback": "solar:paint-roller-linear",
	});
}

export default Component;
