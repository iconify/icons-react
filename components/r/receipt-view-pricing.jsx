import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h54bihbck.css';
import '../../css/m/m6zayjb6x.css';
import '../../css/b/b7_bq8bcw.css';
import '../../css/o/ot9ynr9qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h54bihbck"/><path class="m6zayjb6x"/><path class="b7_bq8bcw"/><path class="ot9ynr9qn"/></g>`,
		"fallback": "streamline-freehand:receipt-view-pricing",
	});
}

export default Component;
