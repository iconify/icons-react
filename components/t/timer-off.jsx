import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bf3x6zx9b.css';
import '../../css/c/c7rnfmonn.css';
import '../../css/r/rca8xd_xh.css';
import '../../css/p/pjmwky14v.css';
import '../../css/v/v5tfkjbei.css';
import '../../css/q/q99jne7pm.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bf3x6zx9b wm-shadow"/><path class="c7rnfmonn"/><path class="rca8xd_xh"/><path class="pjmwky14v"/><path class="v5tfkjbei"/><path class="q99jne7pm"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:timer-off",
	});
}

export default Component;
