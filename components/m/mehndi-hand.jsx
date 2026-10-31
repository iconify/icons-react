import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvrlq6qle.css';
import '../../css/t/tvrx6i0_a.css';
import '../../css/o/ow_-56vlg.css';
import '../../css/e/eijah4p0a.css';
import '../../css/w/ws9mggtcl.css';
import '../../css/n/ni5y3baxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cvrlq6qle wm-shadow"/><path class="tvrx6i0_a"/><path class="ow_-56vlg"/><path class="eijah4p0a"/><path class="ws9mggtcl"/><path class="ni5y3baxc"/></g>`,
		"fallback": "withicons-retro:mehndi-hand",
	});
}

export default Component;
