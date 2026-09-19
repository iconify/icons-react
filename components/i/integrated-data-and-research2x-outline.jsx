import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3c766b8e.css';
import '../../css/d/dmu7i8byd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t3c766b8e"/><path clip-rule="evenodd" class="dmu7i8byd"/></g>`,
		"fallback": "healthicons:integrated-data-and-research2x-outline",
	});
}

export default Component;
