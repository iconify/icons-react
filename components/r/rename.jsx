import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cpe9bh2jv.css';
import '../../css/v/vz0x3nbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cpe9bh2jv"/><path class="vz0x3nbnw"/></g>`,
		"fallback": "gg:rename",
	});
}

export default Component;
