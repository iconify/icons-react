import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eub-owb9l.css';
import '../../css/b/bnr386b3y.css';
import '../../css/o/omtfbmb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eub-owb9l"/><path class="bnr386b3y"/><path clip-rule="evenodd" class="omtfbmb6c"/></g>`,
		"fallback": "solar:rocket-bold",
	});
}

export default Component;
