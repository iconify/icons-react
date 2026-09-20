import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc5sghbks.css';
import '../../css/q/qr17esspr.css';
import '../../css/p/pj6r6abuc.css';
import '../../css/c/cyvlt_bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cc5sghbks"/><path class="qr17esspr"/><path class="pj6r6abuc"/><path class="cyvlt_bvr"/></g>`,
		"fallback": "solar:move-3d-bold-duotone",
	});
}

export default Component;
