import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e7vthbc8d.css';
import '../../css/y/yknkfwbpv.css';
import '../../css/z/zsskpln1f.css';
import '../../css/d/di6ckob5e.css';
import '../../css/w/w9p-5cc-x.css';
import '../../css/x/x3yymbc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e7vthbc8d wm-deco"/><path class="wm-deco yknkfwbpv"/><path class="wm-k zsskpln1f"/><path class="di6ckob5e wm-a"/><path class="w9p-5cc-x wm-s"/><path class="wm-k x3yymbc0k"/></g>`,
		"fallback": "withicons:lion-head-blueprint",
	});
}

export default Component;
