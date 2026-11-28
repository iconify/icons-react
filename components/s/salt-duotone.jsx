import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vksesqbmj.css';
import '../../css/l/la4tqev7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vksesqbmj"/><path class="la4tqev7n primary"/></g>`,
		"fallback": "iconaut:salt-duotone",
	});
}

export default Component;
