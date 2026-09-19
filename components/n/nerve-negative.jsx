import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d00t91las.css';
import '../../css/n/n5e0dyi8x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNerveNegative0)" class="cuyn6tgcc"><path class="d00t91las"/><path clip-rule="evenodd" class="n5e0dyi8x"/></g><defs><clipPath id="healthiconsNerveNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:nerve-negative",
	});
}

export default Component;
