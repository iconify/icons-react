import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqc389uyr.css';
import '../../css/j/jb8zs8rhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqc389uyr"/><path class="jb8zs8rhf"/></g>`,
		"fallback": "andrsrxn:triangle",
	});
}

export default Component;
