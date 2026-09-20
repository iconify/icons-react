import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dpfi26pss.css';
import '../../css/o/oip2tteqt.css';
import '../../css/c/czuzz3bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dpfi26pss"/><path class="oip2tteqt"/><path class="czuzz3bda"/></g>`,
		"fallback": "reicon:video-lib-duotone",
	});
}

export default Component;
