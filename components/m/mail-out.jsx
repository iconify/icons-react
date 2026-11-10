import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ps49u1bmu.css';
import '../../css/q/qta2w7b_n.css';
import '../../css/j/j7m_j8-0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ps49u1bmu"/><path class="qta2w7b_n"/><path class="j7m_j8-0o"/></g>`,
		"fallback": "andrsrxn:mail-out",
	});
}

export default Component;
