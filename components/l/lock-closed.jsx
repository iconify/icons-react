import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wq8x_6bdg.css';
import '../../css/x/xnzo5db6q.css';
import '../../css/b/bablryldg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wq8x_6bdg"/><path class="xnzo5db6q"/><path class="bablryldg"/></g>`,
		"fallback": "pepicons:lock-closed",
	});
}

export default Component;
