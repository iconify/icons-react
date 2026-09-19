import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/b/b3w4egdsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xvj31lbcb"/><path class="b3w4egdsw"/></g>`,
		"fallback": "hugeicons:pound-square",
	});
}

export default Component;
