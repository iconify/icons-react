import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kk8j5dy-h.css';
import '../../css/c/c3rkwj56b.css';
import '../../css/q/q_7wdrfok.css';
import '../../css/k/knn914bon.css';
import '../../css/k/kmv1labbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kk8j5dy-h"/><path class="c3rkwj56b"/><path class="q_7wdrfok"/><path class="knn914bon"/><path class="kmv1labbe"/></g>`,
		"fallback": "pepicons-pencil:trophy",
	});
}

export default Component;
