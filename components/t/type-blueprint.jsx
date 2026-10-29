import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dxemzv3xj.css';
import '../../css/e/eb2qabupy.css';
import '../../css/z/z39bs3adj.css';
import '../../css/m/mjji7jbkf.css';
import '../../css/n/nodnkzdga.css';
import '../../css/p/pxzwrabhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dxemzv3xj wm-deco"/><path class="eb2qabupy wm-deco"/><path class="wm-k z39bs3adj"/><path class="mjji7jbkf wm-a"/><path class="nodnkzdga wm-k"/><path class="pxzwrabhv wm-a"/></g>`,
		"fallback": "withicons:type-blueprint",
	});
}

export default Component;
