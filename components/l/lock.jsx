import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/off5wgbrp.css';
import '../../css/u/ugx4tdyiz.css';
import '../../css/b/bc50g6bwm.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="off5wgbrp"/><rect class="ugx4tdyiz"/><path class="bc50g6bwm"/><path class="jcnvp7bem"/></g>`,
		"fallback": "andrsrxn:lock",
	});
}

export default Component;
