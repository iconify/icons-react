import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zdhvhb4hv.css';
import '../../css/r/rhpb7tbqf.css';
import '../../css/u/u_fqmub8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zdhvhb4hv"/><path class="rhpb7tbqf"/><path class="u_fqmub8u"/></g>`,
		"fallback": "hugeicons:secured-network",
	});
}

export default Component;
