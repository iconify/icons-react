import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spsxosbvf.css';
import '../../css/m/mpp09kbpe.css';
import '../../css/t/tr9nw3b9z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPediatricsNegative0)" class="cuyn6tgcc"><path class="spsxosbvf"/><path class="mpp09kbpe"/><path clip-rule="evenodd" class="tr9nw3b9z"/></g><defs><clipPath id="healthiconsPediatricsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:pediatrics-negative",
	});
}

export default Component;
