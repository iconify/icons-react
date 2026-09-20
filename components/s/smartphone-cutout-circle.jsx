import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6vdf3idb.css';
import '../../css/k/k33mw-s0h.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g6vdf3idb"/><path class="k33mw-s0h"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:smartphone-cutout-circle",
	});
}

export default Component;
