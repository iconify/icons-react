import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuv1yhryp.css';
import '../../css/s/srwgimbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tuv1yhryp"/><path clip-rule="evenodd" class="srwgimbey"/></g>`,
		"fallback": "healthicons:stomach",
	});
}

export default Component;
