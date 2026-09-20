import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2ux2-ptl.css';
import '../../css/h/hmctbtbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2ux2-ptl"/><path class="hmctbtbin"/></g>`,
		"fallback": "nrk:logout",
	});
}

export default Component;
