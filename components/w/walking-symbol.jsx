import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t1b_i8bvs.css';
import '../../css/j/jguz2ld7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t1b_i8bvs"/><path class="jguz2ld7a"/></g>`,
		"fallback": "streamline-freehand:walking-symbol",
	});
}

export default Component;
