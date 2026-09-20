import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kc33thgni.css';
import '../../css/l/lg07v2bfn.css';
import '../../css/h/h_pvdzb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kc33thgni"/><path class="lg07v2bfn"/><path class="h_pvdzb8w"/></g>`,
		"fallback": "mynaui:map-pinned-solid",
	});
}

export default Component;
