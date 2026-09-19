import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wqss8ttiy.css';
import '../../css/g/gw-3o2bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wqss8ttiy"/><path class="gw-3o2bdq"/></g>`,
		"fallback": "guidance:sun",
	});
}

export default Component;
