import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj-ph1b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj-ph1b3z"/>`,
		"fallback": "solar:map-arrow-down-linear",
	});
}

export default Component;
