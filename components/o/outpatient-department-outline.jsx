import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk7rslbwk.css';
import '../../css/s/swdq09oqv.css';
import '../../css/j/jshl0cs6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jk7rslbwk"/><path class="swdq09oqv"/><path clip-rule="evenodd" class="jshl0cs6f"/></g>`,
		"fallback": "healthicons:outpatient-department-outline",
	});
}

export default Component;
