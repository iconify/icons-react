import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wf1yldbop.css';
import '../../css/r/r-2q9jb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 4.88 22.27)" class="wf1yldbop"/><path class="r-2q9jb8u"/></g>`,
		"fallback": "andrsrxn:screen-expand-vertically",
	});
}

export default Component;
