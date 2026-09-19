import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wlavnba7b.css';
import '../../css/q/q6e25zbab.css';
import '../../css/r/rci3dcsby.css';
import '../../css/u/uwn3tbuio.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="wlavnba7b"/><path class="q6e25zbab"/><circle class="rci3dcsby"/><path class="uwn3tbuio"/></g>`,
		"fallback": "foundation:male-female",
	});
}

export default Component;
