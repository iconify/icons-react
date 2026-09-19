import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yygredc7b.css';
import '../../css/z/zoqgi7z2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yygredc7b"/><path clip-rule="evenodd" class="zoqgi7z2p"/></g>`,
		"fallback": "gg:toggle-square",
	});
}

export default Component;
