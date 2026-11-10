import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwntu8bzo.css';
import '../../css/l/llshmfzww.css';
import '../../css/b/b_gi454yn.css';
import '../../css/l/l50u1gugz.css';
import '../../css/i/ij2ll_r3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="rwntu8bzo"/><circle class="llshmfzww"/><path class="b_gi454yn"/><path class="l50u1gugz"/><path class="ij2ll_r3r"/></g>`,
		"fallback": "andrsrxn:route-map-box",
	});
}

export default Component;
