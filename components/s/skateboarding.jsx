import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edh-5o1vu.css';
import '../../css/b/bn3__tq0m.css';
import '../../css/s/svc_u102u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edh-5o1vu"/><path clip-rule="evenodd" class="bn3__tq0m"/><path class="svc_u102u"/></g>`,
		"fallback": "reicon:skateboarding",
	});
}

export default Component;
