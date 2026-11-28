import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nicg6-4io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nicg6-4io"/>`,
		"fallback": "iconaut:spade-solid",
	});
}

export default Component;
