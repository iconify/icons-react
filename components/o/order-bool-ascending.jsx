import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l93nh50eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l93nh50eu"/>`,
		"fallback": "mdi:order-bool-ascending",
	});
}

export default Component;
