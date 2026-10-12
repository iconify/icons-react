import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbdao-b8o.css';
import '../../css/h/h1kwy887u.css';
import '../../css/e/ez7ms9bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbdao-b8o"/><rect transform="matrix(0 -1 -1 0 22.28 19.17)" class="h1kwy887u"/><rect transform="matrix(0 -1 -1 0 15.43 14.73)" class="ez7ms9bna"/></g>`,
		"fallback": "andrsrxn:link-connect",
	});
}

export default Component;
