import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn6os53tq.css';
import '../../css/v/v0rvi1v5q.css';
import '../../css/e/e4lragbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dn6os53tq"/><circle class="v0rvi1v5q"/><path class="e4lragbaf"/></g>`,
		"fallback": "andrsrxn:timer",
	});
}

export default Component;
