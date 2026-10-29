import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h2gyn-b9k.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/i/i9rgmobgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h2gyn-b9k wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="b82dfnb_o wm-k"/><path class="i9rgmobgb wm-a"/></g>`,
		"fallback": "withicons:octagon-alert-blueprint",
	});
}

export default Component;
