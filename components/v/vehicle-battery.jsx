import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_tlz45xk.css';
import '../../css/g/g02311fze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_tlz45xk"/><path class="g02311fze"/></g>`,
		"fallback": "andrsrxn:vehicle-battery",
	});
}

export default Component;
