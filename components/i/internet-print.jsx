import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1ewvkqje.css';
import '../../css/v/vvytp-bxb.css';
import '../../css/r/rfbbqhsqc.css';
import '../../css/n/n25-ct7ex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1ewvkqje"/><path clip-rule="evenodd" class="vvytp-bxb"/><path clip-rule="evenodd" class="rfbbqhsqc"/><path class="n25-ct7ex"/></g>`,
		"fallback": "pepicons:internet-print",
	});
}

export default Component;
