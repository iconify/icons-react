import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-w5imhmn.css';
import '../../css/l/lhu6hrb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d-w5imhmn secondary"/><path class="lhu6hrb7i primary"/></g>`,
		"fallback": "iconaut:sticker-duotone",
	});
}

export default Component;
