import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rkcxutbko.css';
import '../../css/u/u1ee0yifj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rkcxutbko"/><path clip-rule="evenodd" class="u1ee0yifj"/></g>`,
		"fallback": "solar:star-fall-minimalistic-2-bold",
	});
}

export default Component;
