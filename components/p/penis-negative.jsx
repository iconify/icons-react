import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o1bfw-o8s.css';
import '../../css/v/v2d18-b5o.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPenisNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="o1bfw-o8s"/><path class="v2d18-b5o"/></g><defs><clipPath id="healthiconsPenisNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:penis-negative",
	});
}

export default Component;
