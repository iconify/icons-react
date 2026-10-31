import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qbhs7mbyn.css';
import '../../css/g/gy5uzqety.css';
import '../../css/s/s6ue-rbnj.css';
import '../../css/o/oaes-bb1q.css';
import '../../css/m/mbu-a9brw.css';
import '../../css/o/o84c9abiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qbhs7mbyn wm-shadow"/><path class="gy5uzqety"/><path class="s6ue-rbnj"/><path class="oaes-bb1q"/><path class="mbu-a9brw"/><path class="o84c9abiv"/></g>`,
		"fallback": "withicons-retro:popcorn",
	});
}

export default Component;
