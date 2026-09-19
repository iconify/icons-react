import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfryfnb8x.css';
import '../../css/z/z4e-obc3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfryfnb8x"/><path class="z4e-obc3m"/></g>`,
		"fallback": "gg:move-down",
	});
}

export default Component;
