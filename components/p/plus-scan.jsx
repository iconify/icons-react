import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tprt89bde.css';
import '../../css/s/st1tfhwei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tprt89bde"/><path class="st1tfhwei"/></g>`,
		"fallback": "andrsrxn:plus-scan",
	});
}

export default Component;
