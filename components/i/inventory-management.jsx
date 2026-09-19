import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-mit6byn.css';
import '../../css/c/cro928b5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-mit6byn"/><path class="cro928b5q"/>`,
		"fallback": "carbon:inventory-management",
	});
}

export default Component;
