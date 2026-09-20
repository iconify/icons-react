import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1n_l6qgn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1n_l6qgn"/>`,
		"fallback": "memory:table-top-stairs-up",
	});
}

export default Component;
