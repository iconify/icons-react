import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u6ct4wb9h.css';
import '../../css/f/f2n_xupzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u6ct4wb9h"/><path class="f2n_xupzr"/></g>`,
		"fallback": "hugeicons:pathfinder-minus-back",
	});
}

export default Component;
