import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vts9yxb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vts9yxb9d"/>`,
		"fallback": "ri:map-pin-time-fill",
	});
}

export default Component;
