import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzii48bzk.css';
import '../../css/t/t8bp0tbiu.css';
import '../../css/w/w12chrxcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzii48bzk"/><path class="t8bp0tbiu"/><path class="w12chrxcq"/></g>`,
		"fallback": "andrsrxn:music-notes-off",
	});
}

export default Component;
