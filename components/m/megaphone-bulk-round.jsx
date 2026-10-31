import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjm0stb0d.css';
import '../../css/v/vq6nh9jtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjm0stb0d"/><path class="vq6nh9jtg"/></g>`,
		"fallback": "coolicons:megaphone-bulk-round",
	});
}

export default Component;
