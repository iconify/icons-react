import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo91wabfr.css';
import '../../css/b/bnvvvmwrl.css';
import '../../css/r/rk5ge1bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lo91wabfr"/><rect transform="matrix(0 -1 -1 0 16.47 19.75)" class="bnvvvmwrl"/><path class="rk5ge1bwi"/></g>`,
		"fallback": "andrsrxn:mirror-screen",
	});
}

export default Component;
