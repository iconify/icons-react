import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkhzdlb4t.css';
import '../../css/c/cljzex2cb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lkhzdlb4t"/><path clip-rule="evenodd" class="cljzex2cb"/></g>`,
		"fallback": "codicon:question",
	});
}

export default Component;
