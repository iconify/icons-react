import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plj3cxbsw.css';
import '../../css/w/wg6qfxr2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="plj3cxbsw"/><path clip-rule="evenodd" class="wg6qfxr2w"/></g>`,
		"fallback": "heroicons:magnifying-glass-circle-16-solid",
	});
}

export default Component;
