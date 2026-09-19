import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zomwj1b5i.css';
import '../../css/l/l0z8u8bqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zomwj1b5i"/><path clip-rule="evenodd" class="l0z8u8bqc"/></g>`,
		"fallback": "healthicons:respirology-outline",
	});
}

export default Component;
