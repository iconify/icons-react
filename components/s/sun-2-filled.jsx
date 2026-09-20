import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/e/e2zj9kb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf0_gw6sp"/><path clip-rule="evenodd" class="e2zj9kb7c"/></g>`,
		"fallback": "reicon:sun-2-filled",
	});
}

export default Component;
