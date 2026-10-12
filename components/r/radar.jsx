import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxom9tmkx.css';
import '../../css/o/ork2gqbpx.css';
import '../../css/x/xgafwobgl.css';
import '../../css/u/uxo9gqbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bxom9tmkx"/><path class="ork2gqbpx"/><circle class="xgafwobgl"/><path class="uxo9gqbbr"/></g>`,
		"fallback": "andrsrxn:radar",
	});
}

export default Component;
