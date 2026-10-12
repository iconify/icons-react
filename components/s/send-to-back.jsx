import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pujqozcot.css';
import '../../css/e/e5hwqmb1o.css';
import '../../css/x/xdb_yfbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pujqozcot"/><rect transform="matrix(0 -1 -1 0 10.46 10.39)" class="e5hwqmb1o"/><path class="xdb_yfbli"/><rect transform="matrix(0 -1 -1 0 22.23 22.3)" class="e5hwqmb1o"/></g>`,
		"fallback": "andrsrxn:send-to-back",
	});
}

export default Component;
