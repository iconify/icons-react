import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hixkz04yo.css';
import '../../css/z/z4wu_jb1a.css';
import '../../css/h/h4kif8bmq.css';
import '../../css/q/q2ldbubzy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hixkz04yo"/><path clip-rule="evenodd" class="z4wu_jb1a"/><path class="h4kif8bmq"/><path class="q2ldbubzy"/></g>`,
		"fallback": "pepicons:soft-drink-print",
	});
}

export default Component;
