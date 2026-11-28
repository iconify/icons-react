import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uebh2czab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uebh2czab"/>`,
		"fallback": "noviair:laptop-lock",
	});
}

export default Component;
