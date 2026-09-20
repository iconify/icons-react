import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzck99bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzck99bwr"/>`,
		"fallback": "mdi:media-network-outline",
	});
}

export default Component;
