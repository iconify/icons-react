import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgz-_0tym.css';
import '../../css/d/d8q4e7j3z.css';
import '../../css/h/hy5r8xb9e.css';
import '../../css/l/l92feidoj.css';
import '../../css/m/mds0_q72e.css';
import '../../css/z/zofvwwbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgz-_0tym"/><path clip-rule="evenodd" class="d8q4e7j3z"/><path clip-rule="evenodd" class="hy5r8xb9e"/><path class="l92feidoj"/><path class="mds0_q72e"/><path class="zofvwwbzh"/></g>`,
		"fallback": "solar:vanity-bold-duotone",
	});
}

export default Component;
