import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jy8k-_bny.css';
import '../../css/k/kzx0s_uei.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jy8k-_bny"/><path clip-rule="evenodd" class="kzx0s_uei"/></g>`,
		"fallback": "codicon:no-newline",
	});
}

export default Component;
