import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9gsdx3mg.css';
import '../../css/x/xn39h-g0p.css';
import '../../css/b/b8zhl9blw.css';
import '../../css/w/wewxyhbwh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z9gsdx3mg"/><path clip-rule="evenodd" class="xn39h-g0p"/><path clip-rule="evenodd" class="b8zhl9blw"/><path class="wewxyhbwh"/></g>`,
		"fallback": "pepicons-print:map",
	});
}

export default Component;
