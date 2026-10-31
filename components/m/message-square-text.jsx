import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/q/qe_89-bfy.css';
import '../../css/l/l-ng25oml.css';
import '../../css/d/d3ogl-3th.css';
import '../../css/o/oekj-wdez.css';
import '../../css/f/f23-uqnwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="qe_89-bfy"/><path class="l-ng25oml"/><path class="d3ogl-3th"/><path class="oekj-wdez"/><path class="f23-uqnwh"/></g>`,
		"fallback": "withicons-retro:message-square-text",
	});
}

export default Component;
