import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuoq21o4p.css';
import '../../css/l/lq1895egq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cuoq21o4p"/><path class="lq1895egq"/></g>`,
		"fallback": "healthicons:sweating",
	});
}

export default Component;
