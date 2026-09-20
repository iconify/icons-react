import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9ru6bbdt.css';
import '../../css/b/bki-lvbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9ru6bbdt"/><path class="bki-lvbpd"/></g>`,
		"fallback": "reicon:translate4-filled",
	});
}

export default Component;
