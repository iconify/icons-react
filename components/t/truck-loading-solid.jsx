import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-l-qb9q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4-l-qb9q"/>`,
		"fallback": "la:truck-loading-solid",
	});
}

export default Component;
