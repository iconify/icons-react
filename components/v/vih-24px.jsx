import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lplt8cb_e.css';
import '../../css/i/ichpyz-sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lplt8cb_e"/><path clip-rule="evenodd" class="ichpyz-sd"/></g>`,
		"fallback": "healthicons:vih-24px",
	});
}

export default Component;
