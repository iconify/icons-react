import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jdqvtdx7k.css';
import '../../css/p/ps97uvbkd.css';
import '../../css/o/om40t2b1b.css';
import '../../css/p/p4294ebfz.css';
import '../../css/c/c9kxv7r0x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="jdqvtdx7k"/><path clip-rule="evenodd" class="ps97uvbkd"/><path class="om40t2b1b"/><path clip-rule="evenodd" class="p4294ebfz"/></g><path clip-rule="evenodd" class="c9kxv7r0x"/></g>`,
		"fallback": "pepicons-print:pause",
	});
}

export default Component;
