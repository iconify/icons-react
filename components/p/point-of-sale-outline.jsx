import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k84t0ebpb.css';
import '../../css/p/pj4r5mw8r.css';
import '../../css/h/hnzhq2bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="k84t0ebpb"/><path class="pj4r5mw8r"/><path class="hnzhq2bzi"/></g>`,
		"fallback": "bitcoin-icons:point-of-sale-outline",
	});
}

export default Component;
