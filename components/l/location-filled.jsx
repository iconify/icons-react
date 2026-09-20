import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swq55bbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swq55bbsa"/>`,
		"fallback": "tabler:location-filled",
	});
}

export default Component;
