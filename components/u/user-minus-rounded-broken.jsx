import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/p/p8x-zd35l.css';
import '../../css/y/yez-gzbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="p8x-zd35l"/><path class="yez-gzbul"/></g>`,
		"fallback": "solar:user-minus-rounded-broken",
	});
}

export default Component;
