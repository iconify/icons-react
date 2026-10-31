import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dze1-l9fl.css';
import '../../css/h/hdfw-6bvp.css';
import '../../css/d/deyxct9dl.css';
import '../../css/g/gt4aakbwe.css';
import '../../css/w/wgl8izwhi.css';
import '../../css/c/csg5j0bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dze1-l9fl wm-shadow"/><path class="hdfw-6bvp"/><path class="deyxct9dl"/><path class="gt4aakbwe"/><path class="wgl8izwhi"/><path class="csg5j0bwz"/></g>`,
		"fallback": "withicons-retro:triangle",
	});
}

export default Component;
