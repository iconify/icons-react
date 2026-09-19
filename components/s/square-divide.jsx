import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wn7xdmbmc.css';
import '../../css/d/d3z5b_b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wn7xdmbmc"/><path class="d3z5b_b7p"/></g>`,
		"fallback": "hugeicons:square-divide",
	});
}

export default Component;
