import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5yfrdbsc.css';
import '../../css/b/bbqgc4bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5yfrdbsc"/><path clip-rule="evenodd" class="bbqgc4bxx"/></g>`,
		"fallback": "reicon:pen-writing-filled",
	});
}

export default Component;
