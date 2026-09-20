import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_n9c7bav.css';
import '../../css/r/r5irxsbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_n9c7bav"/><path clip-rule="evenodd" class="r5irxsbie"/></g>`,
		"fallback": "reicon:minimize-square3-filled",
	});
}

export default Component;
