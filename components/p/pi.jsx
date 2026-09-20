import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-g3u60ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-g3u60ik"/>`,
		"fallback": "mdi:pi",
	});
}

export default Component;
