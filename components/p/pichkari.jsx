import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/deyy2rbnw.css';
import '../../css/p/p2zv2bcbk.css';
import '../../css/n/nfsgdsqjk.css';
import '../../css/g/g2sik5moa.css';
import '../../css/w/we4z7ebtz.css';
import '../../css/d/d_y20rb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="deyy2rbnw"/><path class="p2zv2bcbk wm-shine"/><path class="nfsgdsqjk wm-k"/><path class="g2sik5moa wm-a"/><path class="we4z7ebtz wm-s"/><path class="d_y20rb0h wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pichkari",
	});
}

export default Component;
