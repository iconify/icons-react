import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwqi-5bwl.css';
import '../../css/w/wz5f-bcbc.css';
import '../../css/y/yiu_zb82h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwqi-5bwl"/><path clip-rule="evenodd" class="wz5f-bcbc"/><path clip-rule="evenodd" class="yiu_zb82h"/></g>`,
		"fallback": "reicon:volume-up-duotone",
	});
}

export default Component;
