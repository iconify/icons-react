import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_wgubbgq.css';
import '../../css/z/z4oa8wbgh.css';
import '../../css/r/rubuw1bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_wgubbgq"/><path clip-rule="evenodd" class="z4oa8wbgh"/><path class="rubuw1bnr"/></g>`,
		"fallback": "andrsrxn:logic-or",
	});
}

export default Component;
