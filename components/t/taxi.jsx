import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s4vmq6xju.css';
import '../../css/k/katjm0mfk.css';
import '../../css/w/wqjl47b1p.css';
import '../../css/c/cmhz4xp5q.css';
import '../../css/e/eorbsebjk.css';
import '../../css/n/npd0a3bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s4vmq6xju wm-shadow"/><path class="katjm0mfk"/><path class="wqjl47b1p"/><path class="cmhz4xp5q"/><path class="eorbsebjk"/><path class="npd0a3bzj"/></g>`,
		"fallback": "withicons-retro:taxi",
	});
}

export default Component;
