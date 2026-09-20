import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxe1yobkw.css';
import '../../css/i/ili-5_b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jxe1yobkw"/><path class="ili-5_b1z"/></g>`,
		"fallback": "reicon:trash2-duotone",
	});
}

export default Component;
