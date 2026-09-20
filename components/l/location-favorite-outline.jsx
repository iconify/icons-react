import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgte9d-7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgte9d-7n"/>`,
		"fallback": "mdi:location-favorite-outline",
	});
}

export default Component;
