import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5y6mhbba.css';
import '../../css/u/uezcy85ng.css';
import '../../css/b/b0i3p8b_u.css';
import '../../css/j/jdear_3wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5y6mhbba"/><rect transform="matrix(1 0 0 -1 14.65 21.18)" class="uezcy85ng"/><rect transform="matrix(1 0 0 -1 2.74 21.18)" class="b0i3p8b_u"/><path class="jdear_3wr"/></g>`,
		"fallback": "andrsrxn:panel-end-open",
	});
}

export default Component;
