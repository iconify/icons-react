import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klewy44hi.css';
import '../../css/w/w09apjbba.css';
import '../../css/x/x8ckvwblh.css';
import '../../css/z/z3_rjvccw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klewy44hi"/><path class="w09apjbba"/><path class="x8ckvwblh"/><path class="z3_rjvccw"/></g>`,
		"fallback": "streamline-flex-color:return-square-2",
	});
}

export default Component;
