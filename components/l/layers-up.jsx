import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eas659bzs.css';
import '../../css/o/o1c76co7x.css';
import '../../css/n/n5r66h5fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eas659bzs"/><path class="o1c76co7x"/><path class="n5r66h5fb"/></g>`,
		"fallback": "andrsrxn:layers-up",
	});
}

export default Component;
