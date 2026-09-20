import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yty-xqb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yty-xqb1z"/>`,
		"fallback": "majesticons:paper-fold-line",
	});
}

export default Component;
