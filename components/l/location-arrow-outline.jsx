import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfvex1b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfvex1b1m"/>`,
		"fallback": "typcn:location-arrow-outline",
	});
}

export default Component;
