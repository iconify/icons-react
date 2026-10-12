import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4pd2ri0n.css';
import '../../css/p/ppje3ihbl.css';
import '../../css/l/lxhwf4tqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4pd2ri0n"/><path class="ppje3ihbl"/><path class="lxhwf4tqf"/></g>`,
		"fallback": "andrsrxn:mail-check",
	});
}

export default Component;
