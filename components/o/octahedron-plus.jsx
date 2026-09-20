import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djhgc8bkm.css';
import '../../css/s/sg6_j5bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="djhgc8bkm"/><path class="sg6_j5bfh"/></g>`,
		"fallback": "tabler:octahedron-plus",
	});
}

export default Component;
