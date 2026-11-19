import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_vdoy6ny.css';
import '../../css/c/cb977fdem.css';
import '../../css/l/l1js82bzq.css';
import '../../css/x/xguzsdbdd.css';
import '../../css/y/yer7ptk2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_vdoy6ny"/><path class="cb977fdem"/><circle class="l1js82bzq"/><circle class="xguzsdbdd"/><path class="yer7ptk2i"/></g>`,
		"fallback": "andrsrxn:phone-clock",
	});
}

export default Component;
