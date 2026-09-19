import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj1a4k1vn.css';
import '../../css/v/vb954ab7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj1a4k1vn"/><path clip-rule="evenodd" class="vb954ab7w"/></g>`,
		"fallback": "healthicons:medium-bars",
	});
}

export default Component;
