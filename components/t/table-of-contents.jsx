import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/obcvi6bzv.css';
import '../../css/b/bylqd1qsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="obcvi6bzv"/><path class="bylqd1qsw"/></g>`,
		"fallback": "hugeicons:table-of-contents",
	});
}

export default Component;
