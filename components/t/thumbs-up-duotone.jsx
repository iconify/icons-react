import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8wurxbdl.css';
import '../../css/b/bsdwe1kxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8wurxbdl secondary"/><path class="bsdwe1kxu primary"/></g>`,
		"fallback": "iconaut:thumbs-up-duotone",
	});
}

export default Component;
