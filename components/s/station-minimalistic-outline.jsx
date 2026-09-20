import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bb0jpsb4k.css';
import '../../css/x/x9i9hmbfe.css';
import '../../css/u/uj3brmbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bb0jpsb4k"/><path class="x9i9hmbfe"/><path clip-rule="evenodd" class="uj3brmbka"/></g>`,
		"fallback": "solar:station-minimalistic-outline",
	});
}

export default Component;
