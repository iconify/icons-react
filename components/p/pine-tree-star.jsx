import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsc0xs_ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsc0xs_ii"/>`,
		"fallback": "noviair:pine-tree-star",
	});
}

export default Component;
