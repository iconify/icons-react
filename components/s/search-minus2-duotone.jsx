import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/a/aouv2bsxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf82r5bjl"/><path clip-rule="evenodd" class="aouv2bsxn"/></g>`,
		"fallback": "reicon:search-minus2-duotone",
	});
}

export default Component;
