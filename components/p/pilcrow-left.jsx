import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwne136gv.css';
import '../../css/f/fmvwt-ljs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwne136gv"/><path class="fmvwt-ljs"/></g>`,
		"fallback": "hugeicons:pilcrow-left",
	});
}

export default Component;
