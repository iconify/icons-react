import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0a-p0bve.css';
import '../../css/r/r599byb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b0a-p0bve"/><path clip-rule="evenodd" class="r599byb8u"/></g>`,
		"fallback": "healthicons:skeleton",
	});
}

export default Component;
