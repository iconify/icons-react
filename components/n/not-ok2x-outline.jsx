import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyy5p_8ju.css';
import '../../css/l/lk__3fowg.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pyy5p_8ju"/><path clip-rule="evenodd" class="lk__3fowg"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:not-ok2x-outline",
	});
}

export default Component;
