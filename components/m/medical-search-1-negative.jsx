import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz617hibg.css';
import '../../css/r/rqa-i6zlt.css';
import '../../css/o/ozpmt6nrj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMedicalSearch1Negative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="wz617hibg"/><path class="rqa-i6zlt"/><path clip-rule="evenodd" class="ozpmt6nrj"/></g><defs><clipPath id="healthiconsMedicalSearch1Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:medical-search-1-negative",
	});
}

export default Component;
