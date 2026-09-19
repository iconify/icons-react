import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7dafxbyv.css';
import '../../css/w/w7sg7srhp.css';
import '../../css/e/e_5r6zbgz.css';
import '../../css/n/nijapbwkt.css';
import '../../css/c/chy-6cb0m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o7dafxbyv"/><path class="w7sg7srhp"/><path clip-rule="evenodd" class="e_5r6zbgz"/><path clip-rule="evenodd" class="nijapbwkt"/><path clip-rule="evenodd" class="chy-6cb0m"/></g>`,
		"fallback": "pepicons:question-circle-print",
	});
}

export default Component;
