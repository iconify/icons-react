import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzz7h2jpq.css';
import '../../css/w/wukorub_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzz7h2jpq"/><path class="wukorub_q"/></g>`,
		"fallback": "heroicons-solid:phone-outgoing",
	});
}

export default Component;
