import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3n_sn-9k.css';
import '../../css/t/t9okf8slh.css';
import '../../css/c/cr_k1acgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3n_sn-9k"/><path class="t9okf8slh"/><path clip-rule="evenodd" class="cr_k1acgj"/></g>`,
		"fallback": "solar:record-circle-bold",
	});
}

export default Component;
