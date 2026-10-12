import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lautcmbvg.css';
import '../../css/f/f2z3hkb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lautcmbvg"/><path class="f2z3hkb0v"/></g>`,
		"fallback": "andrsrxn:sd-card",
	});
}

export default Component;
