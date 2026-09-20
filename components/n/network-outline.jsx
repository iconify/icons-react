import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7lw45zpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7lw45zpi"/>`,
		"fallback": "mdi:network-outline",
	});
}

export default Component;
