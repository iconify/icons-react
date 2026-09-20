import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/z/zrko9r9qa.css';
import '../../css/v/vesi9niup.css';
import '../../css/w/w9jsdsb8y.css';
import '../../css/a/a59r3ek-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="zrko9r9qa"/><path clip-rule="evenodd" class="vesi9niup"/></g><path class="w9jsdsb8y"/><path clip-rule="evenodd" class="a59r3ek-x"/></g>`,
		"fallback": "pepicons-print:list",
	});
}

export default Component;
