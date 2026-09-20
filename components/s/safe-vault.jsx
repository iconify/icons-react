import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx_2aibqr.css';
import '../../css/s/shcdyw0zf.css';
import '../../css/l/l3677ab9t.css';
import '../../css/s/sylkmyb0t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cx_2aibqr"/><path clip-rule="evenodd" class="shcdyw0zf"/><path class="l3677ab9t"/><path class="sylkmyb0t"/></g>`,
		"fallback": "streamline-color:safe-vault",
	});
}

export default Component;
