import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1z6j1pwl.css';
import '../../css/a/aqvlbhbyy.css';
import '../../css/k/kiw2ik2ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1z6j1pwl"/><path class="aqvlbhbyy"/><path class="kiw2ik2ii"/></g>`,
		"fallback": "andrsrxn:olympic-torch",
	});
}

export default Component;
