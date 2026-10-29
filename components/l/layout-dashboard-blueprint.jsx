import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/us1q1oobo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/r/r7fni5bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="us1q1oobo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="r7fni5bma"/></g>`,
		"fallback": "withicons:layout-dashboard-blueprint",
	});
}

export default Component;
