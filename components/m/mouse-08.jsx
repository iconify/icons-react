import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c1t6ucbve.css';
import '../../css/d/d9x6ewbln.css';
import '../../css/q/qzm5wp94p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c1t6ucbve"/><path class="d9x6ewbln"/><path class="qzm5wp94p"/></g>`,
		"fallback": "hugeicons:mouse-08",
	});
}

export default Component;
