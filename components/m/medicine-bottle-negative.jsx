import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ioip8_xzr.css';
import '../../css/b/bpcst2prz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMedicineBottleNegative0)" class="cuyn6tgcc"><path class="ioip8_xzr"/><path clip-rule="evenodd" class="bpcst2prz"/></g><defs><clipPath id="healthiconsMedicineBottleNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:medicine-bottle-negative",
	});
}

export default Component;
