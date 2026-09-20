import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygif3dzbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygif3dzbs"/>`,
		"fallback": "ri:map-pin-3-fill",
	});
}

export default Component;
