import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngmv18w1m.css';
import '../../css/r/ri06eqb4t.css';
import '../../css/c/cyeuk8_pn.css';
import '../../css/y/yaiayubns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ngmv18w1m"/><path class="ri06eqb4t"/><path class="cyeuk8_pn"/><path class="yaiayubns"/></g>`,
		"fallback": "andrsrxn:mushroom",
	});
}

export default Component;
