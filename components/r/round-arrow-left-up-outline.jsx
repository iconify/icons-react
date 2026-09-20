import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i94zsefas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i94zsefas"/>`,
		"fallback": "solar:round-arrow-left-up-outline",
	});
}

export default Component;
