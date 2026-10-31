import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dy1d35oha.css';
import '../../css/n/n84ewqbae.css';
import '../../css/r/rtpyvsh2d.css';
import '../../css/t/t9cb7dbzy.css';
import '../../css/n/nicct9b5v.css';
import '../../css/q/qdw6ex12b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dy1d35oha wm-shadow"/><path class="n84ewqbae"/><path class="rtpyvsh2d"/><path class="t9cb7dbzy"/><path class="nicct9b5v"/><path class="qdw6ex12b wm-shine"/></g>`,
		"fallback": "withicons-retro:laddoo",
	});
}

export default Component;
