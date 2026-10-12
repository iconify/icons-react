import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbvp9lbcm.css';
import '../../css/d/ds2_r8uql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbvp9lbcm"/><path class="ds2_r8uql"/></g>`,
		"fallback": "andrsrxn:power",
	});
}

export default Component;
