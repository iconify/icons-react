import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3b_ypwxl.css';
import '../../css/p/pj_n05aid.css';
import '../../css/u/uc_7r3bbl.css';
import '../../css/f/fqm0nwbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x3b_ypwxl"/><path class="pj_n05aid"/><path class="uc_7r3bbl"/><path class="fqm0nwbmd"/></g>`,
		"fallback": "andrsrxn:shredder",
	});
}

export default Component;
