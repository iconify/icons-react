import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv-dl-bzj.css';
import '../../css/e/els6eabqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nv-dl-bzj"/><path clip-rule="evenodd" class="els6eabqn"/></g>`,
		"fallback": "andrsrxn:rectangle-scan",
	});
}

export default Component;
