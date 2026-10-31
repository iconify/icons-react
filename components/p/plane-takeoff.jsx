import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m0y_iac1w.css';
import '../../css/h/hs7ti0bzi.css';
import '../../css/o/o_0ukr9xz.css';
import '../../css/w/wjq3fr16w.css';
import '../../css/z/zqw2l5bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m0y_iac1w wm-shadow"/><path class="hs7ti0bzi"/><path class="o_0ukr9xz"/><path class="wjq3fr16w"/><path class="zqw2l5bve"/></g>`,
		"fallback": "withicons-retro:plane-takeoff",
	});
}

export default Component;
