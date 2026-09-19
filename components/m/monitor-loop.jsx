import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w495a6bgv.css';
import '../../css/r/r552bkaca.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w495a6bgv"/><path class="r552bkaca"/></g>`,
		"fallback": "pepicons:monitor-loop",
	});
}

export default Component;
