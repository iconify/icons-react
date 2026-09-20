import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyknrtn-w.css';
import '../../css/u/uws3_wb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xyknrtn-w"/><path class="uws3_wb8t"/></g>`,
		"fallback": "solar:plus-minus-bold",
	});
}

export default Component;
