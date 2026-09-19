import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9cqr-bxx.css';
import '../../css/r/rmlud0brz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9cqr-bxx"/><path class="rmlud0brz"/></g>`,
		"fallback": "bi:terminal-split",
	});
}

export default Component;
