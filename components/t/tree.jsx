import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cc4luccci.css';
import '../../css/n/nxpnadcsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cc4luccci"/><path class="nxpnadcsr"/></g>`,
		"fallback": "iconaut:tree",
	});
}

export default Component;
