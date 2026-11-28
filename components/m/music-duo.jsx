import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iercfls4x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vpr67b4vu.css';
import '../../css/k/kdk4_sbmk.css';
import '../../css/d/d7bxwzrwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iercfls4x secondary"/><g class="dt0cm9dhy primary"><path class="vpr67b4vu"/><path class="kdk4_sbmk"/><path class="d7bxwzrwj"/></g>`,
		"fallback": "iconaut:music-duo",
	});
}

export default Component;
