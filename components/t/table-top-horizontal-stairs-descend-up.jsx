import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvd52qb7x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvd52qb7x"/>`,
		"fallback": "memory:table-top-horizontal-stairs-descend-up",
	});
}

export default Component;
