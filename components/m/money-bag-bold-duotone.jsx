import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c38jz1bub.css';
import '../../css/b/b3gp8zbvg.css';
import '../../css/w/wqsjcy92r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c38jz1bub"/><path class="b3gp8zbvg"/><path class="wqsjcy92r"/></g>`,
		"fallback": "solar:money-bag-bold-duotone",
	});
}

export default Component;
