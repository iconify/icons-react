import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxdl1iumf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxdl1iumf"/>`,
		"fallback": "mdi:invoice-outline",
	});
}

export default Component;
