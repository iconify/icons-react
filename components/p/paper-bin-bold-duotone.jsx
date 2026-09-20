import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0_3y9-wd.css';
import '../../css/e/ed8ehg-oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0_3y9-wd"/><path clip-rule="evenodd" class="ed8ehg-oy"/></g>`,
		"fallback": "solar:paper-bin-bold-duotone",
	});
}

export default Component;
