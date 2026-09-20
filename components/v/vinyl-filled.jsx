import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkkvp5-0w.css';
import '../../css/h/hjhs8kb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kkkvp5-0w"/><path clip-rule="evenodd" class="hjhs8kb6w"/></g>`,
		"fallback": "reicon:vinyl-filled",
	});
}

export default Component;
