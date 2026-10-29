import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/db9oi35bt.css';
import '../../css/l/le9c2_xok.css';
import '../../css/v/v-x-g53_a.css';
import '../../css/w/w7xw-2bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="db9oi35bt wm-deco"/><path class="le9c2_xok wm-k"/><path class="v-x-g53_a wm-k"/><path class="w7xw-2bff wm-s"/></g>`,
		"fallback": "withicons:piggy-bank-blueprint",
	});
}

export default Component;
