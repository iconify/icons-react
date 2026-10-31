import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dknzj6b_j.css';
import '../../css/h/hm8w6hg3b.css';
import '../../css/b/b_y2ijb5q.css';
import '../../css/x/xs_occxnv.css';
import '../../css/a/al15f9bxm.css';
import '../../css/j/jpdqgbc3y.css';
import '../../css/x/x0ma-o8gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dknzj6b_j wm-shadow"/><path class="hm8w6hg3b"/><path class="b_y2ijb5q"/><path class="xs_occxnv"/><path class="al15f9bxm"/><path class="jpdqgbc3y"/><path class="wm-s x0ma-o8gy"/></g>`,
		"fallback": "withicons-retro:lunar-drum",
	});
}

export default Component;
