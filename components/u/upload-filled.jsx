import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pin9c1bnx.css';
import '../../css/a/ahw25pb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pin9c1bnx"/><path class="ahw25pb8c"/></g>`,
		"fallback": "reicon:upload-filled",
	});
}

export default Component;
