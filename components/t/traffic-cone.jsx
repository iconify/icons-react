import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p67-f3bar.css';
import '../../css/c/c5nto_b8o.css';
import '../../css/x/xet846fwt.css';
import '../../css/k/kyudq1bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p67-f3bar"/><path class="c5nto_b8o"/><path class="xet846fwt"/><path class="kyudq1bdz"/></g>`,
		"fallback": "andrsrxn:traffic-cone",
	});
}

export default Component;
