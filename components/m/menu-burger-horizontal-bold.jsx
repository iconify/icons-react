import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdh8ldc3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdh8ldc3p"/>`,
		"fallback": "iconamoon:menu-burger-horizontal-bold",
	});
}

export default Component;
