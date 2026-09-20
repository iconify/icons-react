import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b68duzbyt.css';
import '../../css/i/isgxx3bho.css';
import '../../css/c/cpxtebbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b68duzbyt"/><path clip-rule="evenodd" class="isgxx3bho"/><path class="cpxtebbji"/></g>`,
		"fallback": "nrk:rectangle-expand-expressive",
	});
}

export default Component;
