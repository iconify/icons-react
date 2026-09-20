import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t23fxacvf.css';
import '../../css/z/zegrxibpg.css';
import '../../css/f/f6ck3roek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t23fxacvf"/><path class="zegrxibpg"/><path clip-rule="evenodd" class="f6ck3roek"/></g>`,
		"fallback": "solar:palette-round-bold",
	});
}

export default Component;
