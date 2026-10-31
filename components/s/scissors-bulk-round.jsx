import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2o-fqb9r.css';
import '../../css/e/e4loxhbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2o-fqb9r"/><path class="e4loxhbti"/></g>`,
		"fallback": "coolicons:scissors-bulk-round",
	});
}

export default Component;
