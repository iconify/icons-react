import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/brye_nbes.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/z/zvszdccwg.css';
import '../../css/n/ngurz8bhm.css';
import '../../css/d/dgp8ihnse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="brye_nbes wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k zvszdccwg"/><path class="ngurz8bhm wm-a"/><path class="dgp8ihnse wm-k"/></g>`,
		"fallback": "withicons:move-blueprint",
	});
}

export default Component;
