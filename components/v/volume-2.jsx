import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u_5gwlboh.css';
import '../../css/k/kssxsdvim.css';
import '../../css/q/q-olh7blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="u_5gwlboh"/><path class="kssxsdvim"/><path class="q-olh7blc"/></g>`,
		"fallback": "matita:volume-2",
	});
}

export default Component;
