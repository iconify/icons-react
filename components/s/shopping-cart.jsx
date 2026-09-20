import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlk5m1b8o.css';
import '../../css/p/pzuhhh1if.css';
import '../../css/p/pupkd_1ls.css';
import '../../css/j/jbkl3jbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qlk5m1b8o"/><path class="pzuhhh1if"/><circle class="pupkd_1ls"/><circle class="jbkl3jbof"/></g>`,
		"fallback": "majesticons:shopping-cart",
	});
}

export default Component;
