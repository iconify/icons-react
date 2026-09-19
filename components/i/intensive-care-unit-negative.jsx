import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bl9pa8bta.css';
import '../../css/z/zk0gytqrc.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIntensiveCareUnitNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="bl9pa8bta"/><path class="zk0gytqrc"/></g><defs><clipPath id="healthiconsIntensiveCareUnitNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:intensive-care-unit-negative",
	});
}

export default Component;
