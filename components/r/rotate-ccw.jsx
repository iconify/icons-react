import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n001-1bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n001-1bpt"/>`,
		"fallback": "boxicons:rotate-ccw",
	});
}

export default Component;
