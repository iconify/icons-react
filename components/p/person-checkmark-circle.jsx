import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cx5cq0pcw.css';
import '../../css/k/kv8lp-b9a.css';
import '../../css/e/ef-o7abje.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cx5cq0pcw"/><path class="kv8lp-b9a"/><path class="ef-o7abje"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:person-checkmark-circle",
	});
}

export default Component;
