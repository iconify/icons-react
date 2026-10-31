import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/psw7ik7pc.css';
import '../../css/q/qxw4fpbyd.css';
import '../../css/l/lx__tekse.css';
import '../../css/e/eutgqsdgd.css';
import '../../css/e/e1witcc7p.css';
import '../../css/w/w4liczgcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="psw7ik7pc wm-shadow"/><path class="qxw4fpbyd"/><path class="lx__tekse"/><path class="eutgqsdgd"/><path class="e1witcc7p"/><path class="w4liczgcv"/></g>`,
		"fallback": "withicons-retro:tree-pine",
	});
}

export default Component;
