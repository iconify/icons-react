import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/b/bx61cb_8u.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="kmnr8jx4o"/><path class="bx61cb_8u"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:sad-circle-linear",
	});
}

export default Component;
