import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tklg79b7a.css';
import '../../css/d/dp65c3b5s.css';
import '../../css/o/ot6o4qb9o.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNetwork4gNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="tklg79b7a"/><path class="dp65c3b5s"/><path clip-rule="evenodd" class="ot6o4qb9o"/></g><defs><clipPath id="healthiconsNetwork4gNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:network-4g-negative",
	});
}

export default Component;
