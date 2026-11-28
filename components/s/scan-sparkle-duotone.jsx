import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxwpihbjl.css';
import '../../css/r/rvvmuj4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxwpihbjl secondary"/><path class="primary rvvmuj4wm"/></g>`,
		"fallback": "iconaut:scan-sparkle-duotone",
	});
}

export default Component;
