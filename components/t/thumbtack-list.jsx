import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugf7_bg0v.css';
import '../../css/k/kp3f8bbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ugf7_bg0v"/><path class="kp3f8bbos"/></g>`,
		"fallback": "reicon:thumbtack-list",
	});
}

export default Component;
