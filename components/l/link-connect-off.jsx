import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_2-wm1dt.css';
import '../../css/h/h1kwy887u.css';
import '../../css/e/ez7ms9bna.css';
import '../../css/x/x39i3fbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_2-wm1dt"/><rect transform="matrix(0 -1 -1 0 22.28 19.17)" class="h1kwy887u"/><rect transform="matrix(0 -1 -1 0 15.43 14.73)" class="ez7ms9bna"/><path class="x39i3fbkc"/></g>`,
		"fallback": "andrsrxn:link-connect-off",
	});
}

export default Component;
