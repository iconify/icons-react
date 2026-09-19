import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p70jf77ka.css';
import '../../css/k/k28phwblq.css';
import '../../css/p/p6znq_gmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p70jf77ka"/><path class="k28phwblq"/><path class="p6znq_gmt"/></g>`,
		"fallback": "hugeicons:tips",
	});
}

export default Component;
