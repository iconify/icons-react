import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k32np9szs.css';
import '../../css/x/xi0-2kbdf.css';
import '../../css/r/ri7rkebhg.css';
import '../../css/w/wah1e5bqz.css';
import '../../css/r/rlzwmwbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k32np9szs wm-shadow"/><path class="xi0-2kbdf"/><path class="ri7rkebhg"/><path class="wah1e5bqz"/><path class="rlzwmwbtn wm-s"/></g>`,
		"fallback": "withicons-retro:mouse-pointer-click",
	});
}

export default Component;
