import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1n6pzbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1n6pzbsu"/>`,
		"fallback": "noviair:shovel",
	});
}

export default Component;
