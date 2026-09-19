import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4pbug86i.css';
import '../../css/l/l7fiaob4l.css';
import '../../css/w/w4xi5ecbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4pbug86i"/><path class="l7fiaob4l"/><path clip-rule="evenodd" class="w4xi5ecbh"/></g>`,
		"fallback": "healthicons:wash-hands2x-outline",
	});
}

export default Component;
