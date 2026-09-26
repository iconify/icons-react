import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hllyxzboc.css';
import '../../css/m/mj_6ev9oe.css';
import '../../css/f/fzogdacmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="mj_6ev9oe"/><path class="fzogdacmp"/></g>`,
		"fallback": "solar:minimalistic-magnifier-check-linear",
	});
}

export default Component;
