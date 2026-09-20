import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r6wod7yvv.css';
import '../../css/s/sj5lnccsu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r6wod7yvv"/><path class="sj5lnccsu"/></g>`,
		"fallback": "pepicons-print:line-slant-up",
	});
}

export default Component;
