import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y91yaib5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y91yaib5z"/>`,
		"fallback": "mdi:vector-polyline-plus",
	});
}

export default Component;
