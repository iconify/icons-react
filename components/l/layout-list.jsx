import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/njotjuwbq.css';
import '../../css/t/tofc7o3so.css';
import '../../css/q/qcl_macpa.css';
import '../../css/l/lbfsknb3o.css';
import '../../css/z/z3lc_ybga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="njotjuwbq wm-shadow"/><path class="tofc7o3so wm-shadow"/><path class="qcl_macpa"/><path class="lbfsknb3o"/><path class="z3lc_ybga"/></g>`,
		"fallback": "withicons-brutal:layout-list",
	});
}

export default Component;
