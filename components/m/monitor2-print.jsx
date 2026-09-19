import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtmvlacpw.css';
import '../../css/d/ds0-m5bxn.css';
import '../../css/x/x3ove9b8z.css';
import '../../css/b/bej3h2bvr.css';
import '../../css/t/ta1-4-bqx.css';
import '../../css/z/zc0n0bboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wtmvlacpw"/><path clip-rule="evenodd" class="ds0-m5bxn"/><path class="x3ove9b8z"/><path clip-rule="evenodd" class="bej3h2bvr"/><path class="ta1-4-bqx"/><path clip-rule="evenodd" class="zc0n0bboj"/></g>`,
		"fallback": "pepicons:monitor2-print",
	});
}

export default Component;
