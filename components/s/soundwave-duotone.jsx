import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yhg7eybua.css';
import '../../css/a/aloehbcya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yhg7eybua"/><path class="aloehbcya"/></g>`,
		"fallback": "reicon:soundwave-duotone",
	});
}

export default Component;
