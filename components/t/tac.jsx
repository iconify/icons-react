import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7_9cs48e.css';
import '../../css/h/h62ixbbtg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7_9cs48e"/><path clip-rule="evenodd" class="h62ixbbtg"/></g>`,
		"fallback": "healthicons:tac",
	});
}

export default Component;
