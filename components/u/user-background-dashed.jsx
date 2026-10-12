import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n94z3rk9g.css';
import '../../css/x/xej3gr7nl.css';
import '../../css/v/vgkwz8q2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n94z3rk9g"/><path class="xej3gr7nl"/><path class="vgkwz8q2y"/></g>`,
		"fallback": "andrsrxn:user-background-dashed",
	});
}

export default Component;
