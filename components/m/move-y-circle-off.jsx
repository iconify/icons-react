import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0vom0-hm.css';
import '../../css/y/yhsywbcrt.css';
import '../../css/d/d-q7spbap.css';
import '../../css/r/rfwl0qbpy.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c0vom0-hm"/><path clip-rule="evenodd" class="yhsywbcrt"/><path clip-rule="evenodd" class="d-q7spbap"/><path clip-rule="evenodd" class="rfwl0qbpy"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:move-y-circle-off",
	});
}

export default Component;
