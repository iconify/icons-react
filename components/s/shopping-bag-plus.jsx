import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/banhrjb8o.css';
import '../../css/n/nuxvx-imw.css';
import '../../css/s/sx9r5_bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="banhrjb8o"/><path class="nuxvx-imw"/><path class="sx9r5_bwg"/></g>`,
		"fallback": "andrsrxn:shopping-bag-plus",
	});
}

export default Component;
