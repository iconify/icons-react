import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/thfih0jyl.css';
import '../../css/e/elhf-ac1v.css';
import '../../css/b/bwd60po_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="thfih0jyl"/><path class="elhf-ac1v"/><path class="bwd60po_v"/></g>`,
		"fallback": "hugeicons:triangle-01",
	});
}

export default Component;
