import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njvb8_e0a.css';
import '../../css/p/pnw53uboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="njvb8_e0a"/><path clip-rule="evenodd" class="pnw53uboj"/></g>`,
		"fallback": "reicon:monitor-phone-filled",
	});
}

export default Component;
