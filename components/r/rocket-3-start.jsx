import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peavab2fo.css';
import '../../css/o/on2boy_0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="peavab2fo"/><path clip-rule="evenodd" class="on2boy_0n"/></g>`,
		"fallback": "majesticons:rocket-3-start",
	});
}

export default Component;
