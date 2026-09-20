import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgyjo-acm.css';
import '../../css/s/syl5s1p5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgyjo-acm"/><path class="syl5s1p5k"/></g>`,
		"fallback": "reicon:perfume-filled",
	});
}

export default Component;
