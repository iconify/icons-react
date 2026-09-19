import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6c12yubr.css';
import '../../css/r/rcsi3rprl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6c12yubr"/><path clip-rule="evenodd" class="rcsi3rprl"/></g>`,
		"fallback": "codicon:unlock",
	});
}

export default Component;
