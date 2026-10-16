import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lruw-wcag.css';
import '../../css/c/c_u92nytu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lruw-wcag"/><path class="c_u92nytu"/></g>`,
		"fallback": "andrsrxn:paper-bin",
	});
}

export default Component;
