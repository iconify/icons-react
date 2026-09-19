import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5k9pab6h.css';
import '../../css/b/b5q8sk36z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m5k9pab6h"/><path clip-rule="evenodd" class="b5q8sk36z"/></g>`,
		"fallback": "healthicons:ministry-of-health2x-outline",
	});
}

export default Component;
