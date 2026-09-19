import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/t/tdrlb7b0w.css';
import '../../css/h/h9z2q_b6q.css';
import '../../css/a/axq84z9hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path class="tdrlb7b0w"/><path clip-rule="evenodd" class="h9z2q_b6q"/><path clip-rule="evenodd" class="axq84z9hc"/></g>`,
		"fallback": "iconoir:magnet-solid",
	});
}

export default Component;
