import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uapa1_3wq.css';
import '../../css/u/uoo0a1wol.css';
import '../../css/c/c8wu6vbwj.css';
import '../../css/g/g6f1ct3rs.css';
import '../../css/r/rlxjm2brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uapa1_3wq wm-shadow"/><path class="uoo0a1wol"/><path class="c8wu6vbwj"/><path class="g6f1ct3rs"/><path class="rlxjm2brf"/></g>`,
		"fallback": "withicons-retro:toolbox",
	});
}

export default Component;
