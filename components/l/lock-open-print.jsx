import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d63otns7k.css';
import '../../css/a/a7cf72bwi.css';
import '../../css/u/ujauf4b7r.css';
import '../../css/x/xk51nbcmj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d63otns7k"/><path clip-rule="evenodd" class="a7cf72bwi"/><path clip-rule="evenodd" class="ujauf4b7r"/><path class="xk51nbcmj"/></g>`,
		"fallback": "pepicons:lock-open-print",
	});
}

export default Component;
