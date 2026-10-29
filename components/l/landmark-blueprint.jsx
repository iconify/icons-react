import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hmb8w9btd.css';
import '../../css/y/yrgccdbnk.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/q/qf2jt4bcl.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/b/ba_wvobfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hmb8w9btd wm-deco"/><path class="wm-deco yrgccdbnk"/><path class="cf3uzcrzx wm-deco"/><path class="qf2jt4bcl wm-k"/><path class="ar0r6f66r wm-a"/><path class="ba_wvobfo wm-k"/></g>`,
		"fallback": "withicons:landmark-blueprint",
	});
}

export default Component;
