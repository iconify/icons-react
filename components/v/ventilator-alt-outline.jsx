import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-s5bdb6i.css';
import '../../css/c/cyp765f8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e-s5bdb6i"/><path class="cyp765f8q"/></g>`,
		"fallback": "healthicons:ventilator-alt-outline",
	});
}

export default Component;
