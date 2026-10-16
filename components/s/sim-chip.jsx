import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxhnwmbhr.css';
import '../../css/l/liqgtpb1t.css';
import '../../css/j/jctd5bcsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxhnwmbhr"/><path class="liqgtpb1t"/><rect transform="matrix(0 -1 -1 0 22.27 20.18)" class="jctd5bcsf"/></g>`,
		"fallback": "andrsrxn:sim-chip",
	});
}

export default Component;
