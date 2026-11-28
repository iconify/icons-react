import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obz2q_blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obz2q_blu"/>`,
		"fallback": "noviair-light:utensils-check",
	});
}

export default Component;
