import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kvce4pl-l.css';
import '../../css/x/xqh9rrg0g.css';
import '../../css/t/txsvwdb1u.css';
import '../../css/u/u1of9ltii.css';
import '../../css/n/ngurz8bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kvce4pl-l wm-k"/><path class="wm-a xqh9rrg0g"/><path class="txsvwdb1u wm-shadow"/><path class="u1of9ltii wm-k"/><path class="ngurz8bhm wm-a"/></g>`,
		"fallback": "withicons:move-engrave",
	});
}

export default Component;
