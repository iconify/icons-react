import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/davn51b1w.css';
import '../../css/h/hwc6h3bbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="davn51b1w"/><path class="hwc6h3bbr"/></g>`,
		"fallback": "healthicons:letrina-alt-outline",
	});
}

export default Component;
