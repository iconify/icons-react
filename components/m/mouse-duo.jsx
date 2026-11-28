import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj494dplb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/frwj1bkcb.css';
import '../../css/l/lfjpy4bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj494dplb secondary"/><g class="dt0cm9dhy primary"><path class="frwj1bkcb"/><path class="lfjpy4bqg"/></g>`,
		"fallback": "iconaut:mouse-duo",
	});
}

export default Component;
