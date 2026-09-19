import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzywvebxc.css';
import '../../css/r/rf89l1qgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uzywvebxc"/><path clip-rule="evenodd" class="rf89l1qgn"/></g>`,
		"fallback": "healthicons:prostate",
	});
}

export default Component;
