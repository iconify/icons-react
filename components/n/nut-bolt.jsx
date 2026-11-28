import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bj6iiybrq.css';
import '../../css/l/l5-q_fbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bj6iiybrq"/><path class="l5-q_fbxp"/></g>`,
		"fallback": "iconaut:nut-bolt",
	});
}

export default Component;
