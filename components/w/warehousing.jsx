import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/i/i86ys9byx.css';
import '../../css/y/y2n_micpy.css';
import '../../css/j/je1iedc_r.css';
import '../../css/q/qlqmuob1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="i86ys9byx"/><path class="y2n_micpy"/><circle class="je1iedc_r"/><path class="qlqmuob1m"/></g>`,
		"fallback": "icon-park:warehousing",
	});
}

export default Component;
