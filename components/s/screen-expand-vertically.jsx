import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv7xv2_ix.css';
import '../../css/l/llatj7mez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nv7xv2_ix"/><path class="llatj7mez"/></g>`,
		"fallback": "andrsrxn:screen-expand-vertically",
	});
}

export default Component;
