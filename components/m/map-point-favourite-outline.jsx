import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-3hur0vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-3hur0vy"/>`,
		"fallback": "solar:map-point-favourite-outline",
	});
}

export default Component;
