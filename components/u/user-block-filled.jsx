import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iof_a_26r.css';
import '../../css/i/ij7k8xbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iof_a_26r"/><path class="ij7k8xbxs"/></g>`,
		"fallback": "reicon:user-block-filled",
	});
}

export default Component;
