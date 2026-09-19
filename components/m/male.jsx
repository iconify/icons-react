import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m6ifnhj0n.css';
import '../../css/y/yhrf3n8_m.css';
import '../../css/k/k1p-s986k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="m6ifnhj0n"/><path class="yhrf3n8_m"/><path class="k1p-s986k"/></g>`,
		"fallback": "icon-park-outline:male",
	});
}

export default Component;
