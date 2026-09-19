import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6bqoszmq.css';
import '../../css/g/gp-f-abhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t6bqoszmq"/><path class="gp-f-abhd"/></g>`,
		"fallback": "healthicons:lactose",
	});
}

export default Component;
