import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/z/zp5uafbnd.css';
import '../../css/q/qx72e2b5s.css';
import '../../css/n/nstp48bla.css';
import '../../css/u/ucs1nqbnj.css';
import '../../css/u/ur236cp6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="zp5uafbnd"/><path class="qx72e2b5s"/><path class="nstp48bla"/><path class="ucs1nqbnj"/><path class="ur236cp6b"/></g>`,
		"fallback": "withicons-retro:message-square-plus",
	});
}

export default Component;
