import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4c0m_b8h.css';
import '../../css/j/j9652o1qc.css';
import '../../css/q/qz2u0-d3j.css';
import '../../css/s/sl7bx3b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j4c0m_b8h"/><path class="j9652o1qc"/><path class="qz2u0-d3j"/><path class="sl7bx3b5l"/></g>`,
		"fallback": "andrsrxn:user-background-sparkle",
	});
}

export default Component;
