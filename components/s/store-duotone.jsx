import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8f74xbeg.css';
import '../../css/s/smo3d300s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8f74xbeg secondary"/><path class="primary smo3d300s"/></g>`,
		"fallback": "iconaut:store-duotone",
	});
}

export default Component;
