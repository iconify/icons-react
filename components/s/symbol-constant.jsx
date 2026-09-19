import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztwk59bxw.css';
import '../../css/s/s40o6fb9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ztwk59bxw"/><path class="s40o6fb9c"/></g>`,
		"fallback": "codicon:symbol-constant",
	});
}

export default Component;
