import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hf64-p5qc.css';
import '../../css/z/zsc5veb8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hf64-p5qc"/><path class="zsc5veb8p"/></g>`,
		"fallback": "healthicons:treated-water2x-outline",
	});
}

export default Component;
