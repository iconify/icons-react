import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bn8y6suty.css';
import '../../css/f/fyibwt4bd.css';
import '../../css/h/hhd17-bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bn8y6suty"/><path clip-rule="evenodd" class="fyibwt4bd"/><path class="hhd17-bgv"/></g>`,
		"fallback": "reicon:video-replace-duotone",
	});
}

export default Component;
