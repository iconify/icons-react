import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k150lj2rb.css';
import '../../css/t/t-ars3bhu.css';
import '../../css/e/e0rqc4ysb.css';
import '../../css/e/euo8kyimj.css';
import '../../css/f/f3y_gabnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k150lj2rb"/><path class="t-ars3bhu"/><path class="e0rqc4ysb"/><path class="euo8kyimj"/><path class="f3y_gabnt"/></g>`,
		"fallback": "andrsrxn:umbrella",
	});
}

export default Component;
