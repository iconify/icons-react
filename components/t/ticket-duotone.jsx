import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfzsyzb5n.css';
import '../../css/b/b8qbt77bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bfzsyzb5n secondary"/><path class="b8qbt77bh primary"/></g>`,
		"fallback": "iconaut:ticket-duotone",
	});
}

export default Component;
