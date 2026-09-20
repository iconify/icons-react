import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewia5rmob.css';
import '../../css/d/di7tu-7tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewia5rmob"/><path class="di7tu-7tl"/></g>`,
		"fallback": "keyline-icons:package-sharp-duotone",
	});
}

export default Component;
