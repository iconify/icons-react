import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg0dq4bxe.css';
import '../../css/n/ngz6222nx.css';
import '../../css/w/w-t956ach.css';
import '../../css/m/m6n3r9nnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.28 16.74)" class="sg0dq4bxe"/><rect transform="matrix(0 -1 -1 0 22.28 16.74)" class="ngz6222nx"/><path class="w-t956ach"/><path class="m6n3r9nnm"/></g>`,
		"fallback": "andrsrxn:keyboard-down",
	});
}

export default Component;
