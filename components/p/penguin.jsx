import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b262p1bwm.css';
import '../../css/j/jubl0mbgj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bw835zz1c.css';
import '../../css/l/lyurstbcd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b262p1bwm"/><path class="jubl0mbgj"/><g class="ij2x_72vy"><path class="bw835zz1c"/><path class="lyurstbcd"/></g>`,
		"fallback": "openmoji:penguin",
	});
}

export default Component;
