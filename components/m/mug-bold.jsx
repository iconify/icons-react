import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cf4va2ows.css';
import '../../css/r/r7wajpbsm.css';
import '../../css/h/hxxn-3jdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cf4va2ows"/><path class="r7wajpbsm"/><path class="hxxn-3jdw"/></g>`,
		"fallback": "solar:mug-bold",
	});
}

export default Component;
