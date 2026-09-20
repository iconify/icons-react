import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bwis17j6i.css';
import '../../css/c/cobbi21gd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bwis17j6i"/><path class="cobbi21gd"/></g>`,
		"fallback": "pepicons-pencil:monitor-loop",
	});
}

export default Component;
