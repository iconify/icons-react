import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4bvi8bgx.css';
import '../../css/l/lkl3iabhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i4bvi8bgx"/><path class="lkl3iabhj"/></g>`,
		"fallback": "reicon:medal-circle-filled",
	});
}

export default Component;
