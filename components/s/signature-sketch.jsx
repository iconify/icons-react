import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fizeclbdz.css';
import '../../css/r/rc1nbbcet.css';
import '../../css/f/f0yb61qbz.css';
import '../../css/n/n2ypjvrce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fizeclbdz wm-k"/><path class="rc1nbbcet wm-a"/><path class="f0yb61qbz wm-k"/><path class="n2ypjvrce wm-a"/></g>`,
		"fallback": "withicons:signature-sketch",
	});
}

export default Component;
