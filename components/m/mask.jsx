import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4yb6nowa.css';
import '../../css/f/f831nsbux.css';
import '../../css/k/kvvnvtbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4yb6nowa"/><path class="f831nsbux"/><path class="kvvnvtbkr"/></g>`,
		"fallback": "andrsrxn:mask",
	});
}

export default Component;
