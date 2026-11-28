import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iswpv9-we.css';
import '../../css/r/rt4dozbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iswpv9-we"/><path class="rt4dozbwy"/></g>`,
		"fallback": "iconaut:stool-solid",
	});
}

export default Component;
