import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgrts9b0u.css';
import '../../css/c/cr9ixncpc.css';
import '../../css/k/kq0j4r9-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sgrts9b0u"/><path class="cr9ixncpc"/><path class="kq0j4r9-g"/></g>`,
		"fallback": "andrsrxn:trash-warning",
	});
}

export default Component;
