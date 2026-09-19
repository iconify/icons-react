import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qoehezbdc.css';
import '../../css/b/b1_u0pbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="qoehezbdc"/><path class="b1_u0pbjf"/></g>`,
		"fallback": "guidance:settings",
	});
}

export default Component;
