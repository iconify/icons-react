import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdgx2wbcw.css';
import '../../css/u/uigwrsbfm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdgx2wbcw"/><path clip-rule="evenodd" class="uigwrsbfm"/></g>`,
		"fallback": "healthicons:symptom",
	});
}

export default Component;
