import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/up9srbczz.css';
import '../../css/h/h-hhqcdkb.css';
import '../../css/v/vt8a-vb3p.css';
import '../../css/g/gxt0l0bjk.css';
import '../../css/y/yk6pw_bfq.css';
import '../../css/k/kro82vbrq.css';
import '../../css/g/g6o8xobrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="up9srbczz wm-k"/><path class="h-hhqcdkb wm-a"/><path class="vt8a-vb3p wm-s"/><path class="gxt0l0bjk wm-shadow"/><path class="wm-k yk6pw_bfq"/><path class="kro82vbrq wm-a"/><path class="g6o8xobrr wm-s"/></g>`,
		"fallback": "withicons:satellite-dish-engrave",
	});
}

export default Component;
