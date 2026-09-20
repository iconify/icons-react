import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5yo_1bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5yo_1bpr"/>`,
		"fallback": "tdesign:numbers-1",
	});
}

export default Component;
