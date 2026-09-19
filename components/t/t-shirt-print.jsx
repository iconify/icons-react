import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbbc56xbn.css';
import '../../css/l/l35_cxukk.css';
import '../../css/p/pdx-mjvpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbbc56xbn"/><path clip-rule="evenodd" class="l35_cxukk"/><path class="pdx-mjvpo"/></g>`,
		"fallback": "pepicons:t-shirt-print",
	});
}

export default Component;
