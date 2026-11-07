import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpgyrzr1h.css';
import '../../css/u/uxszj1bro.css';
import '../../css/z/zt3x4widq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qpgyrzr1h"/><path class="uxszj1bro"/><path class="zt3x4widq"/></g>`,
		"fallback": "solar:music-note-3-line-duotone",
	});
}

export default Component;
