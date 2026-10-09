import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1vqxhqob.css';
import '../../css/c/c07srb4ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1vqxhqob"/><path class="c07srb4ol"/>`,
		"fallback": "energy-icons:pine-tree-48-bold",
	});
}

export default Component;
