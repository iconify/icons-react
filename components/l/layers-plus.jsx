import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx0mhmbds.css';
import '../../css/c/c3avokh1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx0mhmbds"/><path class="c3avokh1v"/></g>`,
		"fallback": "andrsrxn:layers-plus",
	});
}

export default Component;
