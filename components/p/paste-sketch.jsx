import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/utejzabus.css';
import '../../css/q/q8dj_4b9d.css';
import '../../css/i/i9kv_6bto.css';
import '../../css/d/dowp58bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="utejzabus"/><path class="q8dj_4b9d wm-k"/><path class="i9kv_6bto wm-k"/><path class="dowp58bga wm-a"/></g>`,
		"fallback": "withicons:paste-sketch",
	});
}

export default Component;
