import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ygu8dbbgu.css';
import '../../css/y/yr8srdber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ygu8dbbgu"/><path clip-rule="evenodd" class="yr8srdber"/></g>`,
		"fallback": "reicon:screen-share-duotone",
	});
}

export default Component;
