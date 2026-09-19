import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thbf1-bfm.css';
import '../../css/i/ihgsnmbfr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPpeFaceShieldAltNegative0)" class="cuyn6tgcc"><path class="thbf1-bfm"/><path clip-rule="evenodd" class="ihgsnmbfr"/></g><defs><clipPath id="healthiconsPpeFaceShieldAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ppe-face-shield-alt-negative",
	});
}

export default Component;
