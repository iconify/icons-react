import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbuiu65mt.css';
import '../../css/x/xm1lmyb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nbuiu65mt"/><path clip-rule="evenodd" class="xm1lmyb8b"/></g>`,
		"fallback": "reicon:lightning",
	});
}

export default Component;
