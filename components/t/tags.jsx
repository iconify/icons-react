import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q05er5bdz.css';
import '../../css/f/flfh2ebhi.css';
import '../../css/c/c4ir34j_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q05er5bdz"/><path class="flfh2ebhi"/><path class="c4ir34j_e"/></g>`,
		"fallback": "iconaut:tags",
	});
}

export default Component;
