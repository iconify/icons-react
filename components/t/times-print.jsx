import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtfdr7bxo.css';
import '../../css/b/b19dnacrf.css';
import '../../css/n/nef4w_xbd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gtfdr7bxo"/><path class="b19dnacrf"/><path class="nef4w_xbd"/></g>`,
		"fallback": "pepicons:times-print",
	});
}

export default Component;
