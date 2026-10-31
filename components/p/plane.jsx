import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yiym35b5k.css';
import '../../css/q/q7_b2ubhz.css';
import '../../css/d/dbuwv9blf.css';
import '../../css/r/rw5ofbwhd.css';
import '../../css/b/bf-0h3pje.css';
import '../../css/g/gzlrm40mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yiym35b5k"/><path class="q7_b2ubhz"/><path class="dbuwv9blf"/><path class="rw5ofbwhd"/><path class="bf-0h3pje"/><path class="gzlrm40mx"/></g>`,
		"fallback": "withicons-retro:plane",
	});
}

export default Component;
