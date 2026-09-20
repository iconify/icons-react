import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtjn5bxe.css';
import '../../css/u/u0mvf5jqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgtjn5bxe"/><path clip-rule="evenodd" class="u0mvf5jqt"/></g>`,
		"fallback": "reicon:shield-alert",
	});
}

export default Component;
