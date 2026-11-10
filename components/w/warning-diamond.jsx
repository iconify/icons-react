import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4m669xzj.css';
import '../../css/n/n5d20pqlu.css';
import '../../css/k/k3tgldn6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4m669xzj"/><path class="n5d20pqlu"/><path class="k3tgldn6z"/></g>`,
		"fallback": "andrsrxn:warning-diamond",
	});
}

export default Component;
