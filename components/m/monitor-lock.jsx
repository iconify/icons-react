import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rujow35iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rujow35iy"/>`,
		"fallback": "noviair-light:monitor-lock",
	});
}

export default Component;
