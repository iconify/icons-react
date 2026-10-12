import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q86cy9bkh.css';
import '../../css/p/pkobubcjx.css';
import '../../css/o/os6sxy2_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="q86cy9bkh"/><circle class="pkobubcjx"/><path class="os6sxy2_m"/></g>`,
		"fallback": "andrsrxn:male",
	});
}

export default Component;
