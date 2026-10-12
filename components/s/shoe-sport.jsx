import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvzatvbwp.css';
import '../../css/l/lccrxnbgw.css';
import '../../css/t/tjrrh16qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvzatvbwp"/><path class="lccrxnbgw"/><path class="tjrrh16qn"/></g>`,
		"fallback": "andrsrxn:shoe-sport",
	});
}

export default Component;
