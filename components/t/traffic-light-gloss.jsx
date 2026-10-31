import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp9ph3m6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp9ph3m6z"/>`,
		"fallback": "withicons:traffic-light-gloss",
	});
}

export default Component;
