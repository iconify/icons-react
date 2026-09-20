import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3utncnvl.css';
import '../../css/d/d7p7zt-me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3utncnvl"/><path clip-rule="evenodd" class="d7p7zt-me"/></g>`,
		"fallback": "solar:microphone-bold",
	});
}

export default Component;
