import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_rw0vbdc.css';
import '../../css/i/ie4523zex.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTempleAltNegative0)" class="cuyn6tgcc"><path class="l_rw0vbdc"/><path clip-rule="evenodd" class="ie4523zex"/></g><defs><clipPath id="healthiconsTempleAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:temple-alt-negative",
	});
}

export default Component;
