import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-_or_22r.css';
import '../../css/l/l8h560gpm.css';
import '../../css/w/w1g8kv4lt.css';
import '../../css/u/uz5aqebtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i-_or_22r"/><path class="l8h560gpm wm-s"/><path class="w1g8kv4lt wm-k"/><path class="uz5aqebtu wm-s"/></g>`,
		"fallback": "withicons:volume-off-sketch",
	});
}

export default Component;
