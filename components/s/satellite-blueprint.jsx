import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s6hu1cmbz.css';
import '../../css/k/kydla-v8g.css';
import '../../css/c/caz3ylb4t.css';
import '../../css/e/e3ugiqbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s6hu1cmbz wm-deco"/><path class="kydla-v8g wm-k"/><path class="caz3ylb4t wm-a"/><path class="e3ugiqbea wm-s"/></g>`,
		"fallback": "withicons:satellite-blueprint",
	});
}

export default Component;
