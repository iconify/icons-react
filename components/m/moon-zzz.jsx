import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkvar5_4g.css';
import '../../css/d/dap9s9bzf.css';
import '../../css/q/qovhyw9bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gkvar5_4g"/><path class="dap9s9bzf"/><path class="qovhyw9bj"/></g>`,
		"fallback": "andrsrxn:moon-zzz",
	});
}

export default Component;
