import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjqhddb9g.css';
import '../../css/q/q1b-_nbpa.css';
import '../../css/f/f3b5r9b5b.css';
import '../../css/t/txzxaf12h.css';
import '../../css/k/kp32w4bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjqhddb9g"/><path clip-rule="evenodd" class="q1b-_nbpa"/><path class="f3b5r9b5b"/><path clip-rule="evenodd" class="txzxaf12h"/><path clip-rule="evenodd" class="kp32w4bck"/></g>`,
		"fallback": "pepicons:previous-track",
	});
}

export default Component;
