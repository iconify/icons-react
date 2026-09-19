import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y6p9_bslg.css';
import '../../css/r/r5xu_nn8e.css';
import '../../css/p/p-waabblu.css';
import '../../css/u/ux0lnab5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y6p9_bslg"/><path class="r5xu_nn8e"/><path class="y6p9_bslg"/><path class="p-waabblu"/><path class="ux0lnab5b"/></g>`,
		"fallback": "icon-park:pencil",
	});
}

export default Component;
