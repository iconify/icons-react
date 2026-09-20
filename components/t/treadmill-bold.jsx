import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etj7zqhmh.css';
import '../../css/e/e7cl5uk_o.css';
import '../../css/e/eqq32hr1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etj7zqhmh"/><path clip-rule="evenodd" class="e7cl5uk_o"/><path class="eqq32hr1t"/></g>`,
		"fallback": "solar:treadmill-bold",
	});
}

export default Component;
