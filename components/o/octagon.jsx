import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc0w28bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc0w28bou"/>`,
		"fallback": "noviair-light:octagon",
	});
}

export default Component;
