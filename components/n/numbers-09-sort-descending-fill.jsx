import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua5uh7bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua5uh7bgc"/>`,
		"fallback": "mingcute:numbers-09-sort-descending-fill",
	});
}

export default Component;
