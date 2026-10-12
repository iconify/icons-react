import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_qfywfql.css';
import '../../css/o/ons6tvbey.css';
import '../../css/n/nua9blc2r.css';
import '../../css/t/txmro8bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r_qfywfql"/><path class="ons6tvbey"/><path class="nua9blc2r"/><path class="txmro8bhk"/></g>`,
		"fallback": "andrsrxn:toggles",
	});
}

export default Component;
