import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz3-ulbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz3-ulbvh"/>`,
		"fallback": "boxicons:menu-close",
	});
}

export default Component;
