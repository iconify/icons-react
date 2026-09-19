import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wx5gq56ck.css';
import '../../css/q/qt018lhae.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wx5gq56ck"/><path class="qt018lhae"/></g>`,
		"fallback": "foundation:layout",
	});
}

export default Component;
