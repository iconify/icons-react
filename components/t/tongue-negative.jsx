import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrxwnpbxg.css';
import '../../css/o/owcquwb3a.css';
import '../../css/l/lj_iaub6h.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTongueNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="qrxwnpbxg"/><path class="owcquwb3a"/><path clip-rule="evenodd" class="lj_iaub6h"/></g><defs><clipPath id="healthiconsTongueNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:tongue-negative",
	});
}

export default Component;
