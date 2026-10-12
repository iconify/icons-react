import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7_gkqcxf.css';
import '../../css/h/h95nu3bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7_gkqcxf"/><path class="h95nu3bxk"/></g>`,
		"fallback": "andrsrxn:sparkle",
	});
}

export default Component;
