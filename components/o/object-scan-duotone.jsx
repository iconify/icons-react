import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctv62h6ha.css';
import '../../css/p/pqk1-ii7r.css';
import '../../css/s/sr9403stc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ctv62h6ha"/><path class="pqk1-ii7r"/><path class="sr9403stc"/></g>`,
		"fallback": "reicon:object-scan-duotone",
	});
}

export default Component;
