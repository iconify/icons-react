import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7vn6xb4u.css';
import '../../css/d/d0fw0c23a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e7vn6xb4u"/><path class="d0fw0c23a"/></g>`,
		"fallback": "pepicons-pencil:leaf",
	});
}

export default Component;
