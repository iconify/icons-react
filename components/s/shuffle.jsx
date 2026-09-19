import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o89w86b0v.css';
import '../../css/m/malxypbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o89w86b0v"/><path class="malxypbal"/></g>`,
		"fallback": "mono-icons:shuffle",
	});
}

export default Component;
