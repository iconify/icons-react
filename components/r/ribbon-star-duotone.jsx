import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s_iyysbff.css';
import '../../css/n/nwuuqq6oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s_iyysbff secondary"/><path class="nwuuqq6oe primary"/></g>`,
		"fallback": "iconaut:ribbon-star-duotone",
	});
}

export default Component;
