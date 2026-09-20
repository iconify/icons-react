import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b30alwicb.css';
import '../../css/f/fbjg-qrsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b30alwicb"/><path class="fbjg-qrsl"/></g>`,
		"fallback": "reicon:user-x-filled",
	});
}

export default Component;
