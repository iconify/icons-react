import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjdit39oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjdit39oz"/>`,
		"fallback": "mdi:network-off-outline",
	});
}

export default Component;
