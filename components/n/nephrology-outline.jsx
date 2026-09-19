import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z396b0bfg.css';
import '../../css/a/ae1738xnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z396b0bfg"/><path clip-rule="evenodd" class="ae1738xnj"/></g>`,
		"fallback": "healthicons:nephrology-outline",
	});
}

export default Component;
