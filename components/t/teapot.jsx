import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kamvjznde.css';
import '../../css/j/jb457_dpg.css';
import '../../css/t/t-puil-ap.css';
import '../../css/e/ejqfli3hh.css';
import '../../css/g/gdnho6bhs.css';
import '../../css/m/mvig8lbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kamvjznde wm-shadow"/><path class="jb457_dpg"/><path class="t-puil-ap"/><path class="ejqfli3hh"/><path class="gdnho6bhs wm-s"/><path class="mvig8lbca"/></g>`,
		"fallback": "withicons-retro:teapot",
	});
}

export default Component;
