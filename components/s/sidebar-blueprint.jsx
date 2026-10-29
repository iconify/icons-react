import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qp3509dce.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/fz9wbhbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qp3509dce wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="fz9wbhbib"/></g>`,
		"fallback": "withicons:sidebar-blueprint",
	});
}

export default Component;
