import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n87g3vegy.css';
import '../../css/s/sfpa_vabo.css';
import '../../css/j/j76_xebgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n87g3vegy"/><path class="sfpa_vabo"/><path clip-rule="evenodd" class="j76_xebgc"/></g>`,
		"fallback": "healthicons:neutral",
	});
}

export default Component;
