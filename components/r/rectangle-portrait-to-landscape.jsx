import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnsi0ob6y.css';
import '../../css/d/d8s_j6ngs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gnsi0ob6y"/><path class="d8s_j6ngs"/></g>`,
		"fallback": "nrk:rectangle-portrait-to-landscape",
	});
}

export default Component;
