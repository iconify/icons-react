import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2bs-acjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2bs-acjx"/>`,
		"fallback": "solar:lock-keyhole-unlocked-bold",
	});
}

export default Component;
