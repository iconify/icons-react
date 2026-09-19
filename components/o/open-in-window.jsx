import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/krkxcsblm.css';
import '../../css/x/xb4t87bjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="krkxcsblm"/><path clip-rule="evenodd" class="xb4t87bjn"/></g>`,
		"fallback": "codicon:open-in-window",
	});
}

export default Component;
