import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr2x1qb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr2x1qb7c"/>`,
		"fallback": "majesticons:mouse-line",
	});
}

export default Component;
