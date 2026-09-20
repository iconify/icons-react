import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cdva7wozz.css';
import '../../css/s/skhrg6tbu.css';
import '../../css/i/iezb6eb_v.css';
import '../../css/n/n9eijwbwv.css';
import '../../css/z/zbgn4_-_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="cdva7wozz"/><path clip-rule="evenodd" class="skhrg6tbu"/></g><path clip-rule="evenodd" class="iezb6eb_v"/><path class="n9eijwbwv"/><path class="zbgn4_-_c"/></g>`,
		"fallback": "pepicons-print:shield-checkered",
	});
}

export default Component;
