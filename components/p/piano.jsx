import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex97i4byh.css';
import '../../css/n/nk63pbc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.36 20.6)" class="ex97i4byh"/><path class="nk63pbc9g"/></g>`,
		"fallback": "andrsrxn:piano",
	});
}

export default Component;
