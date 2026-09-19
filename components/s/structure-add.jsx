import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rt_j06r0h.css';
import '../../css/k/kqugce9wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rt_j06r0h"/><path class="kqugce9wn"/></g>`,
		"fallback": "hugeicons:structure-add",
	});
}

export default Component;
