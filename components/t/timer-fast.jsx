import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn6os53tq.css';
import '../../css/o/olqmsgh_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dn6os53tq"/><path class="olqmsgh_i"/></g>`,
		"fallback": "andrsrxn:timer-fast",
	});
}

export default Component;
