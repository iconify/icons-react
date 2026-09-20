import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hllyxzboc.css';
import '../../css/i/ig7l8tpsj.css';
import '../../css/m/mj_6ev9oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="ig7l8tpsj"/><path class="mj_6ev9oe"/></g>`,
		"fallback": "solar:minimalistic-magnifer-bug-linear",
	});
}

export default Component;
