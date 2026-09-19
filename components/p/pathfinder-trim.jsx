import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iy0sk-4nx.css';
import '../../css/j/jecc0objv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iy0sk-4nx"/><path class="jecc0objv"/></g>`,
		"fallback": "hugeicons:pathfinder-trim",
	});
}

export default Component;
