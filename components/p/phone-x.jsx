import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o69csnv9e.css';
import '../../css/c/cb86tvq_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o69csnv9e"/><path class="cb86tvq_j"/></g>`,
		"fallback": "andrsrxn:phone-x",
	});
}

export default Component;
