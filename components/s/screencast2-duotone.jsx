import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xr85zpb0z.css';
import '../../css/i/ifz1emj1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xr85zpb0z"/><path class="ifz1emj1w"/></g>`,
		"fallback": "reicon:screencast2-duotone",
	});
}

export default Component;
