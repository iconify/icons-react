import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ho1x4zb1d.css';
import '../../css/p/pu1k9kb-y.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsOdontologyNegative0)" class="cuyn6tgcc"><path class="ho1x4zb1d"/><path clip-rule="evenodd" class="pu1k9kb-y"/></g><defs><clipPath id="healthiconsOdontologyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:odontology-negative",
	});
}

export default Component;
