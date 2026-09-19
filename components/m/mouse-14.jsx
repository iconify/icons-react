import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pigt72van.css';
import '../../css/l/loci0ub5e.css';
import '../../css/n/n4oalivtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pigt72van"/><path class="loci0ub5e"/><path class="n4oalivtn"/></g>`,
		"fallback": "hugeicons:mouse-14",
	});
}

export default Component;
