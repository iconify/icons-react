import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qt0ef_bds.css';
import '../../css/z/zwuct7ykb.css';
import '../../css/k/k3y47ub7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qt0ef_bds"/><path class="zwuct7ykb"/><path class="k3y47ub7q"/></g>`,
		"fallback": "hugeicons:mortar",
	});
}

export default Component;
