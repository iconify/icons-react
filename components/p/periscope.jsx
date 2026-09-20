import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpxg61buy.css';
import '../../css/w/wuqhv13kc.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fpxg61buy"/><path class="wuqhv13kc"/></g>`,
		"fallback": "jam:periscope",
	});
}

export default Component;
