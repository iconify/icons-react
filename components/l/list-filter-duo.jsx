import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8x5w1b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8x5w1b7i"/>`,
		"fallback": "iconaut:list-filter-duo",
	});
}

export default Component;
