import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-w8qbchv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-w8qbchv"/>`,
		"fallback": "mdi:numeric-1-circle-outline",
	});
}

export default Component;
