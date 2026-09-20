import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/t/t516tib5y.css';
import '../../css/g/gflmrzp2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf82r5bjl"/><path clip-rule="evenodd" class="t516tib5y"/><path class="gflmrzp2i"/></g>`,
		"fallback": "reicon:search-plus-duotone",
	});
}

export default Component;
