import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flzd5qb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flzd5qb8a"/>`,
		"fallback": "bx:italic",
	});
}

export default Component;
