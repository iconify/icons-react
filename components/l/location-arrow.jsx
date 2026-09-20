import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd9v2eb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd9v2eb0d"/>`,
		"fallback": "typcn:location-arrow",
	});
}

export default Component;
