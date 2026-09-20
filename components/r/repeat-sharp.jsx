import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufsjb8bst.css';
import '../../css/k/kyd2kubmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufsjb8bst"/><path class="kyd2kubmc"/></g>`,
		"fallback": "pixelarticons:repeat-sharp",
	});
}

export default Component;
