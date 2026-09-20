import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emlx1ccps.css';
import '../../css/x/xe6yhc7ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="emlx1ccps"/><path class="xe6yhc7ab"/></g>`,
		"fallback": "reicon:pin-tack-filled",
	});
}

export default Component;
