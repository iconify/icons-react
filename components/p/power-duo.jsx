import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z3e3br_8x.css';
import '../../css/c/cvqxgvx0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z3e3br_8x"/><path class="cvqxgvx0k"/></g>`,
		"fallback": "withicons:power-duo",
	});
}

export default Component;
