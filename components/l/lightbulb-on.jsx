import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnhytrbts.css';
import '../../css/c/cl7mqkzrd.css';
import '../../css/k/kgl-yytwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xnhytrbts"/><path class="cl7mqkzrd"/><path class="kgl-yytwl"/></g>`,
		"fallback": "andrsrxn:lightbulb-on",
	});
}

export default Component;
