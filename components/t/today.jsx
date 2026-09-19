import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sei3qab8x.css';
import '../../css/f/f23ximbyn.css';
import '../../css/i/iy0e64bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="sei3qab8x"/><path clip-rule="evenodd" class="f23ximbyn"/><path class="iy0e64bfz"/></g>`,
		"fallback": "gg:today",
	});
}

export default Component;
