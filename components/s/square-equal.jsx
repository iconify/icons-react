import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf5g5qe5d.css';
import '../../css/d/d3z5b_b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uf5g5qe5d"/><path class="d3z5b_b7p"/></g>`,
		"fallback": "hugeicons:square-equal",
	});
}

export default Component;
