import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkr44_bke.css';
import '../../css/d/d7p7zt-me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zkr44_bke"/><path clip-rule="evenodd" class="d7p7zt-me"/></g>`,
		"fallback": "solar:microphone-2-bold",
	});
}

export default Component;
