import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qdiojkbhy.css';
import '../../css/c/cyp765f8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qdiojkbhy"/><path class="cyp765f8q"/></g>`,
		"fallback": "healthicons:ventilator-alt",
	});
}

export default Component;
