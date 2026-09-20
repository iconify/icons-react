import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd-j38b9m.css';
import '../../css/p/pin9c1bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rd-j38b9m"/><path clip-rule="evenodd" class="pin9c1bnx"/></g>`,
		"fallback": "reicon:upload-duotone",
	});
}

export default Component;
