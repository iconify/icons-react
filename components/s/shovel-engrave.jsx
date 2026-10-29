import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q5y09vy-a.css';
import '../../css/s/s6px0bc7e.css';
import '../../css/i/i6m159bpq.css';
import '../../css/f/fjzpsmbxy.css';
import '../../css/x/xkg1wybgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q5y09vy-a wm-k"/><path class="s6px0bc7e wm-a"/><path class="i6m159bpq wm-shadow"/><path class="fjzpsmbxy wm-k"/><path class="wm-a xkg1wybgt"/></g>`,
		"fallback": "withicons:shovel-engrave",
	});
}

export default Component;
