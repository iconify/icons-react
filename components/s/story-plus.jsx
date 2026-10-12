import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_79x3bti.css';
import '../../css/c/ck6bei2mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="x_79x3bti"/><path class="ck6bei2mt"/></g>`,
		"fallback": "andrsrxn:story-plus",
	});
}

export default Component;
