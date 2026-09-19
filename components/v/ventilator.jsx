import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsgk-sb-n.css';
import '../../css/x/xk-uvxblc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsgk-sb-n"/><path clip-rule="evenodd" class="xk-uvxblc"/></g>`,
		"fallback": "healthicons:ventilator",
	});
}

export default Component;
