import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/airmz0byf.css';
import '../../css/c/ccjbp2bao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="airmz0byf"/><path clip-rule="evenodd" class="ccjbp2bao"/></g>`,
		"fallback": "healthicons:star-small",
	});
}

export default Component;
