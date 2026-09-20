import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj-xrub6u.css';
import '../../css/y/y956gybnc.css';
import '../../css/q/q4wzzr_km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj-xrub6u"/><path clip-rule="evenodd" class="y956gybnc"/><path class="q4wzzr_km"/></g>`,
		"fallback": "reicon:stars3-duotone",
	});
}

export default Component;
