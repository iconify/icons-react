import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qwkq50ycl.css';
import '../../css/p/p-nk8n_8e.css';
import '../../css/u/ul0qc4bzi.css';
import '../../css/r/rfj-albdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qwkq50ycl"/><path class="p-nk8n_8e"/><path class="ul0qc4bzi"/><path class="rfj-albdt"/></g>`,
		"fallback": "pepicons:rewind-time",
	});
}

export default Component;
