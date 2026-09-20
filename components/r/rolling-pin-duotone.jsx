import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8dw9hogh.css';
import '../../css/v/v3v__0b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8dw9hogh"/><path class="v3v__0b9z"/></g>`,
		"fallback": "reicon:rolling-pin-duotone",
	});
}

export default Component;
