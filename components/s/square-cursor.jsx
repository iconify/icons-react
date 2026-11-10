import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx2n8gkrd.css';
import '../../css/n/ntlu6hbsr.css';
import '../../css/x/xtkya24ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx2n8gkrd"/><path class="ntlu6hbsr"/><path class="xtkya24ha"/></g>`,
		"fallback": "andrsrxn:square-cursor",
	});
}

export default Component;
