import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntv4vcvmk.css';
import '../../css/j/j13us8bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ntv4vcvmk secondary"/><path class="j13us8bac primary"/></g>`,
		"fallback": "iconaut:microwave-duotone",
	});
}

export default Component;
