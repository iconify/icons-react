import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x4fgbccmk.css';
import '../../css/i/i5n0-fb8o.css';
import '../../css/q/qm-q2lbka.css';
import '../../css/b/bx4zneb7j.css';
import '../../css/b/bjpcs3dmn.css';
import '../../css/e/ey1ihnwmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x4fgbccmk"/><path class="i5n0-fb8o"/><path class="qm-q2lbka"/><path class="bx4zneb7j"/><path class="bjpcs3dmn"/><path class="ey1ihnwmf"/></g>`,
		"fallback": "withicons-retro:pickaxe",
	});
}

export default Component;
