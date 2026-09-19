import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcrkiyb6q.css';
import '../../css/f/fv_3rybfk.css';
import '../../css/z/zlubvxnlz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bcrkiyb6q"/><path class="fv_3rybfk"/><path clip-rule="evenodd" class="zlubvxnlz"/></g>`,
		"fallback": "healthicons:varicose-vein-outline",
	});
}

export default Component;
