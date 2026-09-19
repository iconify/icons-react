import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yey-7bbgd.css';
import '../../css/m/m3w28gbtg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPpeMaskNegative0)" class="cuyn6tgcc"><path class="yey-7bbgd"/><path clip-rule="evenodd" class="m3w28gbtg"/></g><defs><clipPath id="healthiconsPpeMaskNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:mask-negative",
	});
}

export default Component;
