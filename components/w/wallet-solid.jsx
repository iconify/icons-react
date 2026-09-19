import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/q/q536fgb0l.css';
import '../../css/h/hy4c77bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="q536fgb0l"/><path class="hy4c77bzt"/></g>`,
		"fallback": "iconoir:wallet-solid",
	});
}

export default Component;
