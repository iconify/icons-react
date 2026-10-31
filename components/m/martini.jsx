import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qg4pciyrw.css';
import '../../css/r/rt0e5mb6z.css';
import '../../css/g/ggrjl0bje.css';
import '../../css/s/sxmtimb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qg4pciyrw wm-shadow"/><path class="rt0e5mb6z"/><path class="ggrjl0bje"/><path class="sxmtimb3p"/></g>`,
		"fallback": "withicons-retro:martini",
	});
}

export default Component;
