import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba9j2hbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba9j2hbqj"/>`,
		"fallback": "hugeicons:screen-rotation",
	});
}

export default Component;
