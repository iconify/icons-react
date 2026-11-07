import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7gn9tbal.css';
import '../../css/j/j3epy4b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7gn9tbal"/><path clip-rule="evenodd" class="j3epy4b7i"/>`,
		"fallback": "solar:medal-ribbon-star-bold",
	});
}

export default Component;
