import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkbistf8y.css';
import '../../css/a/akr8wmbfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nkbistf8y"/><path class="akr8wmbfg"/></g>`,
		"fallback": "healthicons:question-circle2x-outline",
	});
}

export default Component;
