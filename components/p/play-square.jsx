import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck39gwq2q.css';
import '../../css/x/xvulmum9n.css';
import '../../css/x/x9cc-tbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ck39gwq2q"/><path class="xvulmum9n"/><path class="x9cc-tbjn"/></g>`,
		"fallback": "andrsrxn:play-square",
	});
}

export default Component;
