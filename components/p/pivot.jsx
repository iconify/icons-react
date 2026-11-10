import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkb8f--qc.css';
import '../../css/m/mtyu7acbi.css';
import '../../css/q/q-5aj45wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkb8f--qc"/><path class="mtyu7acbi"/><path class="q-5aj45wj"/></g>`,
		"fallback": "andrsrxn:pivot",
	});
}

export default Component;
