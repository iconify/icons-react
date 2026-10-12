import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwc5gabwv.css';
import '../../css/i/ibzn6rzyx.css';
import '../../css/l/l_rr6xk_k.css';
import '../../css/n/nmxy0q5gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwc5gabwv"/><circle class="ibzn6rzyx"/><circle class="l_rr6xk_k"/><path class="nmxy0q5gl"/></g>`,
		"fallback": "andrsrxn:list-clock",
	});
}

export default Component;
