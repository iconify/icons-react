import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e1j58ib4f.css';
import '../../css/j/jqsrvlbqh.css';
import '../../css/w/wgr5uv0-u.css';
import '../../css/y/y5dvwo25s.css';
import '../../css/x/x0w6nibqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e1j58ib4f wm-k"/><path class="jqsrvlbqh wm-s"/><path class="wgr5uv0-u wm-shadow"/><path class="wm-k y5dvwo25s"/><path class="wm-s x0w6nibqk"/></g>`,
		"fallback": "withicons:message-square-dot-engrave",
	});
}

export default Component;
