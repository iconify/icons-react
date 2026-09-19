import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tiywx1i6y.css';
import '../../css/y/ymdqyik9m.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPills3Negative0)" class="cuyn6tgcc"><path class="tiywx1i6y"/><path clip-rule="evenodd" class="ymdqyik9m"/></g><defs><clipPath id="healthiconsPills3Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:pills-3-negative",
	});
}

export default Component;
