import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftuix4wah.css';
import '../../css/x/x77lp-bkc.css';
import '../../css/y/y1p7ajbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftuix4wah"/><rect transform="rotate(-45 27.02 -17.17)scale(1 -1)" class="x77lp-bkc"/><path class="y1p7ajbdo"/></g>`,
		"fallback": "andrsrxn:list-edit",
	});
}

export default Component;
