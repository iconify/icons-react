import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbiwzjfep.css';
import '../../css/n/n715z3zzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbiwzjfep"/><path class="n715z3zzi"/></g>`,
		"fallback": "andrsrxn:search-scan",
	});
}

export default Component;
