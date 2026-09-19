import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxpbdbkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxpbdbkr"/>`,
		"fallback": "icon-park-outline:up",
	});
}

export default Component;
