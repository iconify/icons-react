import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_h5aj9yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_h5aj9yf"/>`,
		"fallback": "solar:map-point-bold",
	});
}

export default Component;
