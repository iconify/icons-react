import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/orkxtpb-u.css';
import '../../css/l/l98dhj9ic.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/u/ub1535bgw.css';
import '../../css/e/e4trt-bma.css';
import '../../css/q/qcaa1bb_b.css';
import '../../css/e/epm7bccvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="orkxtpb-u wm-deco"/><path class="l98dhj9ic wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ub1535bgw wm-k"/><path class="e4trt-bma wm-a"/><path class="qcaa1bb_b wm-k"/><path class="epm7bccvq wm-a"/></g>`,
		"fallback": "withicons:list-todo-blueprint",
	});
}

export default Component;
