import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mpiosktxv.css';
import '../../css/o/ouo36c9qn.css';
import '../../css/c/c4xx8f2tm.css';
import '../../css/e/e3xo0ln4v.css';
import '../../css/g/g209xx4kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mpiosktxv wm-shadow"/><path class="ouo36c9qn"/><path class="c4xx8f2tm"/><path class="e3xo0ln4v"/><path class="g209xx4kb wm-s"/></g>`,
		"fallback": "withicons-retro:plug-zap",
	});
}

export default Component;
