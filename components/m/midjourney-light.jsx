import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6j5peb3p.css';
import '../../css/z/zr57spdxu.css';
import '../../css/p/pj5w3p1ws.css';

const viewBox = {"width":698,"height":583};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s6j5peb3p"><path class="zr57spdxu"/><path class="pj5w3p1ws"/></g>`,
		"fallback": "thesvg-color:midjourney-light",
	});
}

export default Component;
