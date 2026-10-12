import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6bcy9beb.css';
import '../../css/d/dpowabb3o.css';
import '../../css/l/lk8-97b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a6bcy9beb"/><circle class="dpowabb3o"/><path class="lk8-97b1t"/></g>`,
		"fallback": "andrsrxn:jupiter",
	});
}

export default Component;
