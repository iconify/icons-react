import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fncbx3c5k.css';
import '../../css/d/d0_7equ9q.css';
import '../../css/l/lajjgabck.css';
import '../../css/i/i2e6hxr2z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="fncbx3c5k"/><path clip-rule="evenodd" class="d0_7equ9q"/></g><path clip-rule="evenodd" class="lajjgabck"/><path clip-rule="evenodd" class="i2e6hxr2z"/></g>`,
		"fallback": "pepicons-print:nut",
	});
}

export default Component;
