import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4c0m_b8h.css';
import '../../css/e/ektua-b0m.css';
import '../../css/q/qz2u0-d3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j4c0m_b8h"/><path class="ektua-b0m"/><path class="qz2u0-d3j"/></g>`,
		"fallback": "andrsrxn:user-background-dashed-sparkle",
	});
}

export default Component;
