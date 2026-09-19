import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5sbkchck.css';
import '../../css/y/yovjmyyvz.css';
import '../../css/p/p6ivtgb6n.css';
import '../../css/l/l9ft0lwss.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a5sbkchck"/><path clip-rule="evenodd" class="yovjmyyvz"/><path class="p6ivtgb6n"/><path class="l9ft0lwss"/></g>`,
		"fallback": "pepicons:loop-plus-print",
	});
}

export default Component;
