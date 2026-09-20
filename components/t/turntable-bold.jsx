import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9ya84bkl.css';
import '../../css/q/qqxd-xb-l.css';
import '../../css/i/i__q0s33s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9ya84bkl"/><path class="qqxd-xb-l"/><path clip-rule="evenodd" class="i__q0s33s"/></g>`,
		"fallback": "solar:turntable-bold",
	});
}

export default Component;
