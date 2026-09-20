import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bn-3b4l.css';
import '../../css/f/f4qjh72zr.css';
import '../../css/l/lcbfz0bks.css';
import '../../css/u/uu_0spbdd.css';
import '../../css/z/zqva-b7vi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tbjbnw6jh.css';
import '../../css/f/fotxbu58s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l0bn-3b4l"><path class="f4qjh72zr"/><path class="lcbfz0bks"/><path class="uu_0spbdd"/><path class="zqva-b7vi"/></g><g class="ij2x_72vy"><path class="tbjbnw6jh"/><path class="fotxbu58s"/></g>`,
		"fallback": "openmoji:pigeon",
	});
}

export default Component;
