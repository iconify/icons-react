import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d38lhlb2a.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/a/aw_udabwt.css';
import '../../css/t/t2srnhboy.css';
import '../../css/k/kiim2mb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d38lhlb2a wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="aw_udabwt wm-k"/><path class="t2srnhboy wm-a"/><path class="kiim2mb2c wm-k"/></g>`,
		"fallback": "withicons:save-blueprint",
	});
}

export default Component;
