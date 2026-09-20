import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3f8qryzp.css';
import '../../css/y/y3vmhhbzm.css';
import '../../css/s/sc106zp3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c3f8qryzp"/><path clip-rule="evenodd" class="y3vmhhbzm"/><path class="sc106zp3l"/></g>`,
		"fallback": "reicon:sun-duotone",
	});
}

export default Component;
