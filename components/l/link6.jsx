import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfb8fp7ae.css';
import '../../css/s/sy_i2yb_t.css';
import '../../css/m/mxmh-727a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pfb8fp7ae"/><path class="sy_i2yb_t"/><path class="mxmh-727a"/></g>`,
		"fallback": "reicon:link6",
	});
}

export default Component;
