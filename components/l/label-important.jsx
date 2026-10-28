import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e285f0bkq.css';
import '../../css/i/irz2ftq2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e285f0bkq"/><path class="irz2ftq2n"/></g>`,
		"fallback": "andrsrxn:label-important",
	});
}

export default Component;
