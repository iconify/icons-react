import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pffpvtbmb.css';
import '../../css/k/k8797ob6w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pffpvtbmb"/><path class="k8797ob6w"/></g>`,
		"fallback": "pullo:satellite-duotone",
	});
}

export default Component;
