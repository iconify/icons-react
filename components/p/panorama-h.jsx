import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u490_9bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u490_9bbd"/>`,
		"fallback": "uil:panorama-h",
	});
}

export default Component;
