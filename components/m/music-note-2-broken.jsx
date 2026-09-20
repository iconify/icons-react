import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dzws6zn0x.css';
import '../../css/c/c55ag9btm.css';
import '../../css/r/roh-o2f0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dzws6zn0x"/><circle class="c55ag9btm"/><path class="roh-o2f0v"/></g>`,
		"fallback": "solar:music-note-2-broken",
	});
}

export default Component;
