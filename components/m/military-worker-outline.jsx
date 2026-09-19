import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjqa6lb9m.css';
import '../../css/s/ssyat5bwx.css';
import '../../css/q/q07wm2a9k.css';
import '../../css/j/j2lbl5b5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjqa6lb9m"/><path clip-rule="evenodd" class="ssyat5bwx"/><path class="q07wm2a9k"/><path clip-rule="evenodd" class="j2lbl5b5q"/></g>`,
		"fallback": "healthicons:military-worker-outline",
	});
}

export default Component;
