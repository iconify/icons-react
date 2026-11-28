import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gnvyvzb7w.css';
import '../../css/d/dmr1fbc2t.css';
import '../../css/k/k3e6macyv.css';
import '../../css/q/qni-80b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gnvyvzb7w"/><path class="dmr1fbc2t"/><path class="k3e6macyv"/><path class="qni-80b_t"/></g>`,
		"fallback": "iconaut:reddit",
	});
}

export default Component;
