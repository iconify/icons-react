import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k570v654g.css';
import '../../css/f/fzvt0ptnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k570v654g"/><path class="fzvt0ptnl"/></g>`,
		"fallback": "andrsrxn:lightning-auto",
	});
}

export default Component;
