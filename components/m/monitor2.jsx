import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttt_csb7t.css';
import '../../css/o/of7zr8bta.css';
import '../../css/c/cnjv6tbhg.css';
import '../../css/a/ahhmpg2xe.css';
import '../../css/z/zc0n0bboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttt_csb7t"/><path class="of7zr8bta"/><path clip-rule="evenodd" class="cnjv6tbhg"/><path class="ahhmpg2xe"/><path clip-rule="evenodd" class="zc0n0bboj"/></g>`,
		"fallback": "pepicons:monitor2",
	});
}

export default Component;
