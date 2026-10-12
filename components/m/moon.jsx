import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjtzebzu.css';
import '../../css/o/og8cnbkna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otjtzebzu"/><path class="og8cnbkna"/></g>`,
		"fallback": "andrsrxn:moon",
	});
}

export default Component;
