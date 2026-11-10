import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_elshbet.css';
import '../../css/f/f4dpkfvlx.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/u/uux6mac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_elshbet"/><path class="f4dpkfvlx"/><path class="yk8wpcb-k"/><path class="uux6mac8t"/></g>`,
		"fallback": "andrsrxn:mail-reply",
	});
}

export default Component;
