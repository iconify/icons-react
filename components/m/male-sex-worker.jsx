import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wopn0fkef.css';
import '../../css/n/nvvganbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wopn0fkef"/><path clip-rule="evenodd" class="nvvganbqr"/></g>`,
		"fallback": "healthicons:male-sex-worker",
	});
}

export default Component;
