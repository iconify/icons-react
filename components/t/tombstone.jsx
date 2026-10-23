import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul18g-5uq.css';
import '../../css/n/ndli32bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ul18g-5uq"/><path class="ndli32bsk"/></g>`,
		"fallback": "andrsrxn:tombstone",
	});
}

export default Component;
