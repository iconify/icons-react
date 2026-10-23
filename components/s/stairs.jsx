import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/o/ofh12pl_x.css';
import '../../css/u/uz7v36brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_9t11wpq"/><path class="ofh12pl_x"/><path class="uz7v36brj"/></g>`,
		"fallback": "andrsrxn:stairs",
	});
}

export default Component;
