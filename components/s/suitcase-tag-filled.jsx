import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cb7c6sbjk.css';
import '../../css/r/rzmwxwd0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cb7c6sbjk"/><path class="rzmwxwd0v"/></g>`,
		"fallback": "reicon:suitcase-tag-filled",
	});
}

export default Component;
