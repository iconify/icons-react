import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9e2kcbuv.css';
import '../../css/k/k774yynor.css';
import '../../css/d/dnka95bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y9e2kcbuv"/><path class="k774yynor"/><path class="dnka95bah"/></g>`,
		"fallback": "solar:planet-3-bold-duotone",
	});
}

export default Component;
