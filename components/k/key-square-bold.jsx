import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlzmtb_fe.css';
import '../../css/h/hcdnpduug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlzmtb_fe"/><path clip-rule="evenodd" class="hcdnpduug"/></g>`,
		"fallback": "solar:key-square-bold",
	});
}

export default Component;
