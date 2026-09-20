import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f528pub4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f528pub4z"/>`,
		"fallback": "mdi:power-socket-fr",
	});
}

export default Component;
