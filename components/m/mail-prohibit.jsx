import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p74anlbhw.css';
import '../../css/x/x7n6a3b_s.css';
import '../../css/y/y31quu63i.css';
import '../../css/t/t2cyjk1nz.css';
import '../../css/d/dnx147b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p74anlbhw"/><circle class="x7n6a3b_s"/><path class="y31quu63i"/><path class="t2cyjk1nz"/><path class="dnx147b0h"/></g>`,
		"fallback": "andrsrxn:mail-prohibit",
	});
}

export default Component;
