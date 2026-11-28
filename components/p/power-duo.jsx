import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsjzq4bne.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rb8rwv0pa.css';
import '../../css/p/p38r5q0if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsjzq4bne secondary"/><g class="dt0cm9dhy primary"><path class="rb8rwv0pa"/><path class="p38r5q0if"/></g>`,
		"fallback": "iconaut:power-duo",
	});
}

export default Component;
