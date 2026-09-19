import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/re6v0rlwg.css';
import '../../css/x/x9je47b1o.css';
import '../../css/x/xa9ln-blb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="re6v0rlwg"/><path clip-rule="evenodd" class="x9je47b1o"/><path class="xa9ln-blb"/></g>`,
		"fallback": "healthicons:risk-analysis2x-outline",
	});
}

export default Component;
