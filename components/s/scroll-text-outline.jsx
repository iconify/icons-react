import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmh5xvb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmh5xvb-x"/>`,
		"fallback": "mdi:scroll-text-outline",
	});
}

export default Component;
