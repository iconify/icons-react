import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgia6beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgia6beu"/>`,
		"fallback": "mdi:web-check",
	});
}

export default Component;
