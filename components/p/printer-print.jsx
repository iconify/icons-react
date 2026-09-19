import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm448n5sq.css';
import '../../css/y/y_eqqfhlq.css';
import '../../css/k/k7-jbed1z.css';
import '../../css/q/qe6nwyqjs.css';
import '../../css/e/evgrznjfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="hm448n5sq"/><path class="y_eqqfhlq"/><path clip-rule="evenodd" class="k7-jbed1z"/><path class="qe6nwyqjs"/><path class="evgrznjfa"/></g>`,
		"fallback": "pepicons:printer-print",
	});
}

export default Component;
