import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/no8v9mbnm.css';
import '../../css/k/k5m78ub-z.css';
import '../../css/j/j_z-_q7lb.css';
import '../../css/q/qrotbkgro.css';
import '../../css/x/x53psybyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="no8v9mbnm wm-shadow"/><path class="k5m78ub-z wm-shadow"/><path class="j_z-_q7lb"/><path class="qrotbkgro"/><path class="x53psybyw"/></g>`,
		"fallback": "withicons-brutal:save-all",
	});
}

export default Component;
