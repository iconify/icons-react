import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a0npckbak.css';
import '../../css/w/wp_raccwx.css';
import '../../css/x/xtomtqpdh.css';
import '../../css/t/tjbgnmb3g.css';
import '../../css/y/yzbkkhbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a0npckbak wm-k"/><path class="wm-a wp_raccwx"/><path class="wm-shadow xtomtqpdh"/><path class="tjbgnmb3g wm-k"/><path class="wm-a yzbkkhbwo"/></g>`,
		"fallback": "withicons:skull-engrave",
	});
}

export default Component;
