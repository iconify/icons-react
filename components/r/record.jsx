import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3kqyjw5w.css';
import '../../css/z/z2ak80-6h.css';
import '../../css/e/e25t-c6vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3kqyjw5w"/><path class="z2ak80-6h"/><path class="e25t-c6vp"/></g>`,
		"fallback": "andrsrxn:record",
	});
}

export default Component;
