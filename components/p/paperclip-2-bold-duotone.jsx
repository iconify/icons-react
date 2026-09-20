import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4e0m0b4s.css';
import '../../css/s/smyg9nvbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i4e0m0b4s"/><path class="smyg9nvbs"/></g>`,
		"fallback": "solar:paperclip-2-bold-duotone",
	});
}

export default Component;
