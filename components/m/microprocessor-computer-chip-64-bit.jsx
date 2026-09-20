import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rkr4y7b_e.css';
import '../../css/u/urwp50bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rkr4y7b_e"/><path class="urwp50bvw"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-64-bit",
	});
}

export default Component;
