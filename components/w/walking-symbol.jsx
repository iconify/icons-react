import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70lsgs8c.css';
import '../../css/t/t1b_i8bvs.css';
import '../../css/n/njg56qbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="w70lsgs8c"><path class="t1b_i8bvs"/><path class="njg56qbhb"/></g>`,
		"fallback": "streamline-freehand-color:walking-symbol",
	});
}

export default Component;
