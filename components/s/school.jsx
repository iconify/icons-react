import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oy8zhnx-j.css';
import '../../css/w/w9jsm6b_o.css';
import '../../css/l/lwib7xzrm.css';
import '../../css/z/z1f7cfk4e.css';
import '../../css/p/p770cdbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oy8zhnx-j wm-shadow"/><path class="w9jsm6b_o"/><path class="lwib7xzrm"/><path class="z1f7cfk4e"/><path class="p770cdbhi"/></g>`,
		"fallback": "withicons-retro:school",
	});
}

export default Component;
