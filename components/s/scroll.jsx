import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u70z7c2zg.css';
import '../../css/n/nifwqobjv.css';
import '../../css/k/kdxi7weab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u70z7c2zg"/><path class="nifwqobjv"/><path class="kdxi7weab"/></g>`,
		"fallback": "andrsrxn:scroll",
	});
}

export default Component;
