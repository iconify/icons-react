import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k--uqqbpr.css';
import '../../css/l/leiq1ib6u.css';
import '../../css/h/hc2a3kmhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k--uqqbpr"/><circle class="leiq1ib6u"/><circle class="hc2a3kmhy"/></g>`,
		"fallback": "hugeicons:plate",
	});
}

export default Component;
