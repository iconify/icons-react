import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qkza15bef.css';
import '../../css/k/kjdy_6b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qkza15bef"/><path class="kjdy_6b8e"/></g>`,
		"fallback": "keyline-icons:tag-duotone",
	});
}

export default Component;
