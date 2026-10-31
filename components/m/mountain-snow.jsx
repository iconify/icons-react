import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6q0web2s.css';
import '../../css/b/b599lcbyn.css';
import '../../css/t/tb-5u0bwo.css';
import '../../css/g/gn8ms0bbq.css';
import '../../css/a/ae02hbfww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t6q0web2s wm-shadow"/><path class="b599lcbyn"/><path class="tb-5u0bwo"/><path class="gn8ms0bbq"/><path class="ae02hbfww"/></g>`,
		"fallback": "withicons-retro:mountain-snow",
	});
}

export default Component;
