import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtgx-r82p.css';
import '../../css/q/qlbdnqb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xtgx-r82p"/><path class="qlbdnqb0x"/></g>`,
		"fallback": "reicon:upload3",
	});
}

export default Component;
