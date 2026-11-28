import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmyai_b4a.css';
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
		"content": `<path class="secondary tmyai_b4a"/><g class="dt0cm9dhy primary"><path class="cc4luccci"/><path class="nxpnadcsr"/></g>`,
		"fallback": "iconaut:tree-duo",
	});
}

export default Component;
