import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usk1e4byl.css';
import '../../css/p/psyvu22kr.css';
import '../../css/v/v9iuqi29k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usk1e4byl"/><path class="psyvu22kr"/><path class="v9iuqi29k"/></g>`,
		"fallback": "andrsrxn:save",
	});
}

export default Component;
