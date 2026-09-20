import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2418pzym.css';
import '../../css/m/md_y5nbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q2418pzym"/><path clip-rule="evenodd" class="md_y5nbjn"/></g>`,
		"fallback": "reicon:like-duotone",
	});
}

export default Component;
