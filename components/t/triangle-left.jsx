import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj74k7qhz.css';
import '../../css/y/y40sbspcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bj74k7qhz"/><path class="y40sbspcp"/></g>`,
		"fallback": "andrsrxn:triangle-left",
	});
}

export default Component;
