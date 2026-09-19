import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6qerqb0o.css';
import '../../css/u/u_y0o5bpw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="g6qerqb0o"/><path class="u_y0o5bpw"/></g>`,
		"fallback": "garden:user-solo-fill-12",
	});
}

export default Component;
