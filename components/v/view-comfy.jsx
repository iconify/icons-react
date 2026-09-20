import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo8f-0bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo8f-0bzo"/>`,
		"fallback": "mdi:view-comfy",
	});
}

export default Component;
