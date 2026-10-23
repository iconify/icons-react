import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux74qwboi.css';
import '../../css/x/xb0nlibbh.css';
import '../../css/d/dkum40bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ux74qwboi"/><path class="xb0nlibbh"/><path class="dkum40bst"/></g>`,
		"fallback": "andrsrxn:razor",
	});
}

export default Component;
