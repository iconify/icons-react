import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lc7hyzboo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/gxcwj_bjs.css';
import '../../css/n/nlr_vsb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lc7hyzboo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="gxcwj_bjs wm-k"/><path class="nlr_vsb6u wm-a"/></g>`,
		"fallback": "withicons:vault-blueprint",
	});
}

export default Component;
