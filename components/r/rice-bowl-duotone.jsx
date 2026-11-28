import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6mg2-bsj.css';
import '../../css/i/isucisbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6mg2-bsj secondary"/><path class="isucisbbk primary"/></g>`,
		"fallback": "iconaut:rice-bowl-duotone",
	});
}

export default Component;
