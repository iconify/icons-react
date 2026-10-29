import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/su9dgwoey.css';
import '../../css/k/ku-38s29b.css';
import '../../css/z/zj798is8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="su9dgwoey wm-deco"/><path class="ku-38s29b wm-k"/><path class="wm-a zj798is8x"/></g>`,
		"fallback": "withicons:lucky-coin-blueprint",
	});
}

export default Component;
