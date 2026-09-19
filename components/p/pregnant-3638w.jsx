import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahdqpnbyt.css';
import '../../css/h/h6oroiv2p.css';
import '../../css/y/y1tfqfzmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahdqpnbyt"/><path clip-rule="evenodd" class="h6oroiv2p"/><path class="y1tfqfzmq"/></g>`,
		"fallback": "healthicons:pregnant-3638w",
	});
}

export default Component;
