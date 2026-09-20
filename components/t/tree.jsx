import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7_94um5r.css';
import '../../css/z/zsbtzw_zy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j7_94um5r"/><path class="zsbtzw_zy"/></g>`,
		"fallback": "pepicons-pencil:tree",
	});
}

export default Component;
