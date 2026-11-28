import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lg376z2cg.css';
import '../../css/n/n_c9itb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lg376z2cg secondary"/><path class="n_c9itb7i primary"/></g>`,
		"fallback": "iconaut:shower-duotone",
	});
}

export default Component;
