import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5y91vbyd.css';
import '../../css/g/gd-6dac0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h5y91vbyd"/><path class="gd-6dac0b"/></g>`,
		"fallback": "coolicons:ship-bulk-round",
	});
}

export default Component;
