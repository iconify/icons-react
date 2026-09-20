import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqb8ycj1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqb8ycj1e"/>`,
		"fallback": "typcn:tick-outline",
	});
}

export default Component;
