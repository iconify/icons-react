import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1djd2ave.css';
import '../../css/q/q1nqcy__p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1djd2ave"/><path clip-rule="evenodd" class="q1nqcy__p"/></g>`,
		"fallback": "reicon:wallet-3",
	});
}

export default Component;
