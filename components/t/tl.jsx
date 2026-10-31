import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxo1rzbps.css';
import '../../css/p/pt-1ib6kt.css';
import '../../css/o/o-cne-k-k.css';
import '../../css/j/jn737pbse.css';

const viewBox = {"width":300,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uxo1rzbps"/><path class="pt-1ib6kt"/><path class="o-cne-k-k"/><path class="jn737pbse"/></g>`,
		"fallback": "cif:tl",
	});
}

export default Component;
