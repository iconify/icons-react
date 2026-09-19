import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lenxo6yhk.css';
import '../../css/p/px-0l9b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lenxo6yhk"/><path class="px-0l9b3e"/></g>`,
		"fallback": "healthicons:ppe-face-shield-alt-outline-24px",
	});
}

export default Component;
