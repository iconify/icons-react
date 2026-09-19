import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yxb5jbb2z.css';
import '../../css/z/zs-kct37k.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsOkNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="yxb5jbb2z"/><path class="zs-kct37k"/></g><defs><clipPath id="healthiconsOkNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ok-negative",
	});
}

export default Component;
