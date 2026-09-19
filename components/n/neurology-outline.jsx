import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qb3j5sknu.css';
import '../../css/d/dfk2b0fqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qb3j5sknu"/><path class="dfk2b0fqv"/></g>`,
		"fallback": "healthicons:neurology-outline",
	});
}

export default Component;
