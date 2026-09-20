import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c45l4lb9l.css';
import '../../css/u/ufu2hjm4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c45l4lb9l"/><path class="ufu2hjm4q"/></g>`,
		"fallback": "reicon:note3-filled",
	});
}

export default Component;
