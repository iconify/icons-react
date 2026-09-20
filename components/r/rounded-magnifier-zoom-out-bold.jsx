import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u40pfubrp.css';
import '../../css/f/f67htronk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u40pfubrp"/><path clip-rule="evenodd" class="f67htronk"/></g>`,
		"fallback": "solar:rounded-magnifier-zoom-out-bold",
	});
}

export default Component;
