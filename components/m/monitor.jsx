import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttt_csb7t.css';
import '../../css/c/cnjv6tbhg.css';
import '../../css/n/ngw06abol.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttt_csb7t"/><path clip-rule="evenodd" class="cnjv6tbhg"/><path class="ngw06abol"/></g>`,
		"fallback": "pepicons:monitor",
	});
}

export default Component;
