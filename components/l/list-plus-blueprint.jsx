import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/brye_nbes.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/t/tm9-ayd9z.css';
import '../../css/c/c3wgojkty.css';
import '../../css/j/j6awffdnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="brye_nbes wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="tm9-ayd9z wm-k"/><path class="c3wgojkty wm-s"/><path class="j6awffdnl wm-k"/></g>`,
		"fallback": "withicons:list-plus-blueprint",
	});
}

export default Component;
